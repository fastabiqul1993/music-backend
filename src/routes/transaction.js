const express = require("express");
const router = express.Router();
const {
  findTransaction,
  createTransaction
} = require("../controllers/transaction");
const { isAuth, isUser } = require("../middleware/auth");

router
  .all("/*", isAuth, isUser)
  .post("/", createTransaction)
  .get("/:id", findTransaction);

module.exports = router;
