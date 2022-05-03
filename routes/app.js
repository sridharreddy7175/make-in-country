const express = require("express");
const router = express.Router();

const {
    getAppById,
    createApp,
    getApp,
    photo,
    updateApp,
    deleteApp,
    getAllApps,
} = require("../controllers/app");

//all of params
router.param("appId", getAppById);

//all of actual routes
//create route
router.post("/app/create/", createApp);

// read routes
router.get("/app/:appId", getApp);
router.get("/app/photo/:appId", photo);

//delete route
router.delete("/app/:appId/", deleteApp);

//update route
router.put("/app/:appId/", updateApp);

//Search ProductName

// router.get("/getproduct/:name", getProductSearch);

//listing route
router.get("/apps", getAllApps);

module.exports = router;
