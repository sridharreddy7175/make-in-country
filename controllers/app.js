
const db = require("../models/app");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.getAppById = (req, res, next, id) => {
    db.App.findById(id)
        // .populate("category")
        .exec((err, app) => {
            if (err) {
                return res.status(400).json({
                    error: "App not found",
                });
            }
            req.app = app;
            next();
        });
};


exports.createApp = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image",
            });
        }
        //destructure the fields
        const { size, name, downloads, ratings, ratingCount, country, category, founder
            , currentOwner, company, firstRelase, headQuarter, details, issues, features
        } = fields;

        if (!size || !name || !downloads || !ratings || !ratingCount || !country || !category || !founder
            || !currentOwner || !company || !firstRelase || !headQuarter || !details || !issues || !features) {
            return res.status(400).json({
                error: "Please include all fields",
            });
        }

        let app = new db.App(fields);


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
        // console.log(product);

        //save to the DB
        app.save((err, app) => {
            if (err) {
                res.status(400).json({
                    error: "Saving app in DB failed",
                });
            }
            res.json(app);
        });
    });
};

exports.getApp = (req, res) => {
    req.app.photo = undefined;
    return res.json(req.app);
};

//middleware
exports.photo = (req, res, next) => {
    console.log("req", req.body)
    if (req.app.photo.data) {
        res.set("Content-Type", req.app.photo.contentType);
        return res.send(req.app.photo.data);
    }
    next();
};



// delete controllers
exports.deleteApp = (req, res) => {
    let app = req.app;
    app.remove((err, deletedApp) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the app",
            });
        }
        res.json({
            message: "Deletion was a success",
            deletedApp,
        });
    });
};

// delete controllers
exports.updateApp = (req, res) => {

};


exports.getAllApps = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

    db.App.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, "asc"]])
        .limit(limit)
        .exec((err, apps) => {
            if (err) {
                return res.status(400).json({
                    error: "NO app FOUND",
                });
            }
            res.json(apps);
        });
};
