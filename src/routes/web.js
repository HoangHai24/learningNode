const express = require("express");
const {
  getHomePage,
  getAbc,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);

router.post("/create-user", postCreateUser);

module.exports = router;
