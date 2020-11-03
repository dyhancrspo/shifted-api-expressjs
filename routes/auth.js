const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
const key = process.env.JWT_KEY;

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    // login success
    const dataUser = {
      username,
      role: "admin",
    };

    const token = jwt.sign(dataUser, key, { expiresIn: "1h" });

    return response(res, 200, "User exist!!", [{ username, password, token }]);
  } else if (username === "user" && password === "user") {
    // login success
    const dataUser = {
      username,
      role: "user",
    };

    const token = jwt.sign(dataUser, key, { expiresIn: "1h" });

    return response(res, 200, "User exist!!", [{ username, password, token }]);
  } else {
    // login failed
    return response(res, 401, "User does not exist!!", []);
  }
});

const response = (res, code, message, data) => {
  res.send({
    code,
    message,
    data,
  });
};

module.exports = router;
