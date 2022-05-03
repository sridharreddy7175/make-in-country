var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
    isAdmin: { type: Boolean, default: false },

}, { timestamps: true });

exports.User = mongoose.model("User", userSchema);