var express = require("express");
var router = express.Router();

var { signup, signin, } = require("../controllers/user");

router.post("/signup", signup);
router.post("/signin", signin);
// router.post("/users", users)
// router.post("/forgotpasword", forgotpassword)
// router.put("/changepasword", changepassword)


module.exports = router;