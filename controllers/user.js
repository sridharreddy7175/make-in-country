const db = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        // check if user already exists
        let user = await db.User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ errors: [{ msg: "User already Exists" }] });
        }
        // encrypt password
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        // register
        let newUser = new db.User({
            name,
            email,
            password: hashedPassword,
        });
        newUser = await newUser.save();
        res.status(200).json({
            msg: "Registration is Success",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            errors: [{ msg: error.message }],
        });
    }
};

exports.signin = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await db.User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
        }
        // check the password
        console.log("password", password);
        console.log("User password", user.password);

        let isMatch = await bcrypt.compare(password, user.password);
        console.log("User match", isMatch);

        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
        }
        if (user.email && user.password) {
            const { _id, name, email, isAdmin, createdAt } = user;
            return res.status(200).json({
                msg: "Login is Success",
                user: {
                    _id,
                    name,
                    email,
                    isAdmin,
                    createdAt,
                },
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            errors: [{ msg: error.message }],
        });
    }
};

exports.changepassword = async (req, res) => {
    try {
        let email = req.body.email;
        let user = await db.User.findOne({ email: email });
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(req.body.newPassword, salt);

        let isMatch = await bcrypt.compare(req.body.currentPassword, user.password);


        if (!isMatch) {
            return res
                .status(401)
                .json({ errors: [{ msg: "no Match previous password" }] });
        } else {
            db.User.findOneAndUpdate(
                { email: email },
                {
                    $set: {
                        password: newPassword,
                    },
                },
                (err, data) => {
                    console.log("data", data);
                    res.status(200).json({
                        msg: "Updated the Password",
                    });
                }
            );
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            errors: [{ msg: error.message }],
        });
    }
};


exports.getUserById = (req, res, next, id) => {
    console.log("hello")
    db.User.findById(id)
        .exec((err, user) => {
            console.log("app", user)
            if (err) {
                return res.status(400).json({
                    error: "User not found",
                });
            }
            req.user = user;
            next();
        });
};


exports.getUser = (req, res) => {
    console.log("hello")
    req.user.photo = undefined;
    return res.json(req.user);
};

//middleware
exports.photo = (req, res, next) => {
    // console.log("req", req.body)
    if (req.user.photo.data) {
        res.set("Content-Type", req.user.photo.contentType);
        return res.send(req.user.photo.data);
    }
    next();
};

exports.updateUser = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image",
            });
        }

        //updation code
        let app = req.app;
        app = _.extend(app, fields);

        //handle file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "File size too big!",
                });
            }
            app.photo.data = fs.readFileSync(file.photo.path);
            app.photo.contentType = file.photo.type;
        }
        console.log(app);

        //save to the DB
        app.save((err, app) => {
            if (err) {
                res.status(400).json({
                    error: "Updation of app failed",
                });
            }
            res.json(app);
        });
    });
};
