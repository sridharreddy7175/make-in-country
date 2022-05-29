var express = require("express");
var router = express.Router();

var {
    signup,
    signin,
    changepassword,
    getUserById,
    getUser,
    updateUser,
    photo,
} = require("../controllers/user");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/changepasword", changepassword);
//params
router.param("userId", getUserById);
//read
router.get("/user/:userId", getUser);
router.get("/user/photo/:userId", photo);

// update
router.put("/user/:userId/", updateUser);

module.exports = router;
