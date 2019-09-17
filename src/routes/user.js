const express = require("express");
const router = express.Router();
const { login, register, registerAdmin } = require("../controllers/user");
const { isAuth } = require("../middleware/auth");

router
  .post("/login", login)
  .post("/register", register)
  .post("/register/admin", isAuth, registerAdmin);

module.exports = router;
