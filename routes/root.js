const express = require("express");
const product = require("./product");
const router = express.Router();

router.use("/product", product);

module.exports = router;
