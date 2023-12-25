const express = require("express");
const { getHomePage, getAbc } = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);

module.exports = router;
