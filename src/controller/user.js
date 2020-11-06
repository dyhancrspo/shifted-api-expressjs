const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

// GET USER DATA ALL
exports.getAll = (dataLogin, req, res, next) => {
  userModel.getAllUser((error, data) => {
    if (error) return res.status(500).send({ error });
    if (dataLogin.statusLoggedIn) {
      return response(res, 200, "Success", [{ data }]);
    } else {
      return response(res, 400, "Unauthorized!!", []);
    }
  });
};

// EDIT DATA
exports.editData = (dataLogin, req, res, next) => {};

// DELETE DATA BY USERNAME
exports.deleteData = (dataLogin, req, res, next) => {
  const username = req.params.username;
  if (dataLogin.role === "Admin") {
    userModel.deleteUser(username, (error, data) => {
      if (error) return res.status(500).send({ error });

      return response(res, 200, "Delete Success", []);
    });
  } else {
    return response(res, 400, "Unauthorized!!", []);
  }
};

const response = (res, code, message, data) => {
  res.send({
    code,
    message,
    data,
  });
};
