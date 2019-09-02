const express = require("express");
const product = require("./product");
const category = require("./category");
const branch = require("./branch");
const router = express.Router();

router.use("/product", product);
router.use("/category", category);
router.use("/branch", branch);

module.exports = router;
