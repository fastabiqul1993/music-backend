const express = require("express");
const router = express.Router();
const { findBranch } = require("../controllers/branch");

router.get("/", findBranch);

module.exports = router;
