const express = require("express");
const router = express.Router();
const { findCategory } = require("../controllers/category");

router.get("/", findCategory);

module.exports = router;
