var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const appSchema = new mongoose.Schema(
    {
        size: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        photo: {
            data: Buffer,
            contentType: String,
        },
        downloads: {
            type: String,
        },
        ratings: {
            type: String,
        },
        ratingCount: {
            type: String,
        },
        country: {
            type: String,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true,
        },
        founder: {
            type: String,
        },
        currentOwner: {
            type: String,
        },
        company: {
            type: String,
        },
        firstRelase: {
            type: String,
        },
        headQuarter: {
            type: String,
        },
        details: {
            type: String,
        },
        issues: {
            type: String,
        },
        features: {
            type: String,
        },
    },
    { timestamps: true }
);

exports.App = mongoose.model("App", appSchema);
