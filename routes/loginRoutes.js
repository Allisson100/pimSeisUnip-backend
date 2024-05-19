const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");

router.post("/user", loginController.login);

module.exports = router;
