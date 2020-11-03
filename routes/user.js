const express = require("express");
const router = express.Router();

const jwtAuth = require("../middleware/jwtAuth");

// public data
router.get("/", (req, res) => {
  // login success
  res.send({
    code: 200,
    message: "Success",
    data: [
      {
        username: "admin",
        email: "admin@admin.com",
      },
    ],
  });
});

// private data
router.get("/all", jwtAuth, (dataLogin, req, res, next) => {
  const data = [
    {
      username: "admin",
      email: "admin@admin.com",
    },
    {
      username: "user",
      email: "user@user.com",
    },
  ];

  if (dataLogin.role === "admin") {
    // login success
    res.send({
      code: 200,
      message: "Success",
      data: data,
    });
  } else {
    res.status(401).send({
      code: 401,
      message: "Unauthorized!!",
      data: [],
    });
  }
});

module.exports = router;
