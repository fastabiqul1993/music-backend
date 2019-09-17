const express = require("express");
const router = express.Router();
const {
  findCart,
  addToCart,
  patchCart,
  deleteFromCart
} = require("../controllers/cart");
const { isAuth, isUser } = require("../middleware/auth");

router
  .all("/*", isAuth, isUser)
  .post("/", addToCart)
  .patch("/", patchCart)
  .delete("/", deleteFromCart)
  .get("/:id", findCart);

module.exports = router;
