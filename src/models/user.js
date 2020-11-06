const conn = require("../config/database");

module.exports = {
  // Get All User
  getAllUser: (cb = () => {}) => {
    try {
      //Find User from Database
      conn.query(
        "SELECT a.id, a.username, a.name, b.role_name as role FROM user a join role b on a.role_id = b.id",
        function (error, results, fields) {
          if (error) {
            console.log("ERROR: getAllUser.if - " + error);
            return cb("Internal Server Error!!", null);
          }
          return cb(null, results);
        }
      );
    } catch (err) {
      console.log("ERROR: " + err);
      return cb("Internal Server Error!!", null);
    }
  },

  //LOGIN
  getUser: (username = null, password = null, cb = () => {}) => {
    try {
      conn.query(
        // "select a.nama, b.username, b.password, c.role_name from employee a left outer join user b on a.user_id = b.id left outer join role c on a.role_id = c.id  where username=? and password=? limit 1",
        // "select a.nama, a.username, a.password, b.role_name from user a left outer join user on a.user_id = b.id left outer join role c on a.role_id = c.id  where username=? and password=? limit 1",
        "SELECT a.id, a.username, a.name, b.role_name as role FROM user a left outer join role b on a.role_id = b.id WHERE username=? AND password=? limit 1",
        [username, password],
        function (error, results, fields) {
          if (error) {
            console.log("ERROR: getUser.if - " + error);
            return cb("Internal Server Error!!", null);
          }
          return cb(null, results);
        }
      );
    } catch (err) {
      console.log("ERROR: " + err);
      return cb("Internal Server Error!!", null);
    }
  },

  //Check username data on db
  checkUsername: (username = null, cb = () => {}) => {
    try {
      //find username
      conn.query(
        "select username from user where username=?",
        [username],
        function (error, results, fields) {
          if (error) {
            console.log("ERROR: checkUsername.if - " + error);
            return cb("Internal Server Error!!", null);
          }
          return cb(null, results);
        }
      );
    } catch (err) {
      console.log("ERROR: checkUsername  " + err);
      return cb("Internal Server Error!!", null);
    }
  },

  //Register
  registerUser: (
    username = null,
    password = null,
    name = null,
    role_id = null,
    cb = () => {}
  ) => {
    try {
      //insert
      conn.query(
        "INSERT INTO user VALUES  (null, ?, ?, ?, ?)",
        [username, password, name, role_id],
        function (error, results, fields) {
          if (error) {
            console.log("ERROR: register.if - " + error);
            return cb("Internal Server Error!!", null);
          }
          return cb(null, results);
        }
      );
    } catch (err) {
      console.log("ERROR: " + err);
      return cb("Internal Server Error!!", null);
    }
  },

  // EDIT DATA
  updateUser: (
    username = null,
    password = null,
    name = null,
    cb = () => {}
  ) => {
    try {
      //UPDATE DATA
      conn.query(
        "UPDATE USER SET username=?, password=?, name=? WHERE username=?",
        [username, password, name],
        function (error, results, fields) {
          if (error) {
            console.log("ERROR: update.if - " + error);
            return cb("Internal Server Error!!", null);
          }
          return cb(null, results);
        }
      );
    } catch (err) {
      console.log("ERROR: " + err);
      return cb("Internal Server Error!!", null);
    }
  },

  // Delete User
  deleteUser: (username = null, cb = () => {}) => {
    try {
      conn.query("DELETE FROM user WHERE username=?", [username], function (
        error,
        results,
        fields
      ) {
        if (error) {
          console.log("ERROR: delete.if - " + error);
          return cb("Internal Server Error!!", null);
        }
        return cb(null, results);
      });
    } catch (err) {
      console.log("ERROR: " + err);
      return cb("Internal Server Error!!", null);
    }
  },
};
