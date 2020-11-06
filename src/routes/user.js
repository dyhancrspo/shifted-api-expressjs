const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

const jwtAuth = require("../middleware/jwtAuth");

// profile data
// router.get("/:email", jwtAuth, userController.getProfile)

// private data
router.get("/", jwtAuth, userController.getAll);

// edit data
router.put("/edit/:username", jwtAuth, userController.editData);

//delete data
router.delete("/delete/:username", jwtAuth, userController.deleteData);

module.exports = router;
