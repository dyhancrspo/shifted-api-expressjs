const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// serve static files
app.use(express.static("public"));

// To fix CORS issue
app.use(cors());

// Import Data from USER Models
const dataUsers = require("./models/Users");

// Routes
const users = require("./routes/user");
const auth = require("./routes/auth");

app.use((req, res, next) => {
  //   res.status(200).json({
  //     message: "Hello World!!",
  //   });
  next();
});

app.use("/users", users);
app.use("/auth", auth);

// ERROR Handler
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

module.exports = app;
