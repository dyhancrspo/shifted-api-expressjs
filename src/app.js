//import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose")
// const db = require("./config/key").mongoURI;
const users = require("./routes/user");
const auth = require("./routes/auth");
//app
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
app.use(express.static("public"));

app.use((req, res, next) => {
  // res.status(200).json({
  //     message: "Hello World!!"
  // })
  next();
});

app.use("/auth", auth);
app.use("/users", users); // edit, delete, detail, add, get

// error handler
app.use((req, res, next) => {
  const error = new Error("Error occured!!");
  next(error);
});
app.use((error, req, res, next) => {
  res.status(500).json({
    code: 500,
    message: error.message,
  });
});

app.use(express.static("public"));
module.exports = app;
