const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware.js");
const {admin} = require("../middleware/adminMiddleware.js");
const {getAdminStatus} = require("../controllers/analyticsController.js");

router.get("/",protect , admin ,getAdminStatus);

module.exports = router ;
