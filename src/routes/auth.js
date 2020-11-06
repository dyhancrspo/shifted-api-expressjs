const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const authController = require("../controller/auth");

//Endpoint Login
router.post("/login", authController.login);

//Endpoint Register
router.post("/register", authController.register);

module.exports = router;
