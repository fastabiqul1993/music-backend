const express = require("express");
const router = express.Router();
const { login, register, registerAdmin } = require("../controllers/user");
const { isAuth } = require("../middleware/auth");

router.post("/login", login);
router.post("/register", register);
router.post("/register/admin", isAuth, registerAdmin);

module.exports = router;
