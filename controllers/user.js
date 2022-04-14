const db = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        // check if user already exists
        let user = await db.User.findOne({ email: email });
        if (user) {
            return res.status(401).json({ errors: [{ msg: 'User already Exists' }] });
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
            msg: 'Registration is Success'
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            errors: [
                { msg: error.message }
            ]
        });
    }
};

exports.signin = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await db.User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        // check the password
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        // create a token
        // let payload = {
        //     user: {
        //         id: user.id,
        //         name: user.name
        //     }
        // };
        // jwt.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
        //     if (err) throw err;
        //     res.status(200).json({
        //         msg: 'Login is Success',
        //         token: token
        //     });
        // });


        if (user.email && user.password) {
            const { _id, name, email, isAdmin, createdAt } = user;
            return res.status(200).json({
                msg: 'Login is Success',
                user: {
                    _id,
                    name,
                    email,
                    isAdmin,
                    createdAt,
                },
            })
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            errors: [
                { msg: error.message }
            ]
        });
    }
}





