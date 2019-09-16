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
  .post("/", isAuth, isUser, addToCart)
  .patch("/", isAuth, isUser, patchCart)
  .delete("/", isAuth, isUser, deleteFromCart)
  .get("/:id", isAuth, isUser, findCart);

module.exports = router;
