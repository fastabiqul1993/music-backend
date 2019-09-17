const express = require("express");
const transaction = require("./transaction");
const cart = require("./cart");
const wishlist = require("./wishlist");
const product = require("./product");
const category = require("./category");
const branch = require("./branch");
const user = require("./user");
const router = express.Router();

router.use("transaction", transaction);
router.use("/cart", cart);
router.use("/wishlist", wishlist);
router.use("/product", product);
router.use("/category", category);
router.use("/branch", branch);
router.use("/user", user);

module.exports = router;
