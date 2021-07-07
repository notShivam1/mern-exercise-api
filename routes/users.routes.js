var express = require("express");
var router = express.Router();
var { loginUser } = require("../controllers/users.controller");

router.route("/").post(loginUser);

module.exports = router;
