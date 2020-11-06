const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const key = process.env.JWT_KEY;

// LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body;
  userModel.getUser(username, password, (error, data) => {
    if (error) return res.status(500).send({ error });
    if (data.length) {
      const dataUser = {
        username,
        role: data[0].role,
        statusLoggedIn: true,
      };
      const token = jwt.sign(dataUser, key, { expiresIn: "1h" });

      return response(res, 200, `Yipiiee...Login Success! ${username}`, [
        { username, role: data[0].role, token },
      ]);
    }
    return response(res, 401, "Sorry, User does not exist!!", []);
  });
};

// REGISTER
exports.register = (req, res) => {
  const { username, password, name, role_id } = req.body;
  userModel.checkUsername(username, (error, data) => {
    if (error) return res.status(500).send({ error });
    if (!data.length) {
      userModel.registerUser(
        username,
        password,
        name,
        role_id,
        (error, data) => {
          if (error) return res.status(500).send({ error });
        }
      );
      return response(res, 200, "Register Success!!", username);
    }
    return response(res, 401, "User has already registered!", []);
  });
};

const response = (res, code, message, data) => {
  res.send({
    code,
    message,
    data,
  });
};
