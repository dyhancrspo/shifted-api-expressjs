const express = require("express");
const app = express();
// const fs = require("fs");
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
const users = require("./models/Users");

app.use((req, res, next) => {
  //   res.status(200).json({
  //     message: "Hello World!!",
  //   });
  next();
});

{
  /* 
app.get("/test", (req, res) => {
  res.send({
    message: "Hello /!!",
  });
});

app.get("/images", (req, res) => {
  fs.readFile("./public/images/weeee.png", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "image/png");
      res.end("ERROR!!");
    } else {
      console.log("data: ", data);
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");
      res.end(data);
    }
  });
});



// Get User by Id
{
  /* 
app.get("/user/:id", (req, res) => {
  res.send(users.findIndex(id));
}); 

*/
}

// Get User
app.get("/user", (req, res) => {
  res.send(users);
});

// POST /login gets urlencoded bodies
app.post("/login", (req, res) => {
  console.log("req Login: ", req.query);
  res.send({
    message: "Hello /!!",
  });
});

// POST /register gets JSON bodies
app.post("/register", (req, res) => {
  console.log("req Register: ", req.body);
  users.push(req.body);
  res.send({
    message: "POST Success",
  });
});

// DELETE /Delete User
app.delete("/user/delete/:username", (req, res) => {
  const { username } = req.params;
  let user = users.filter((data) => {
    if (data.username !== username) {
      return true;
    }
    return false;
  });
  res.send({
    massage: `Deleted User : ${req.params.username}!`,
  });
});

module.exports = app;

//

//

//
// PUT /Edit User
{
  /*
    app.put("/user/edit/:username", (req, res) => {
  const { username } = req.params.username;
  const param = req.body;
  for (let i = 0; i < users.length; i++) {
    let data = users[i];
    if (data.username === username) {
      user[i] = param;
    }
  }
  res.send({
    massage: `Edited User : ${req.params.username}!`,
  });
});*/
}

/**
 * Latihan:
 *  - Login
 *  - Register/Tambah User
 *  - User List
 *  - Edit User
 *  - Delete User
 */
