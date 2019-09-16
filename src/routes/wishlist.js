const express = require("express");
const router = express.Router();
const {
  findWishlist,
  addToWishlist,
  deleteFromWishlist
} = require("../controllers/wishlist");
const { isAuth, isUser } = require("../middleware/auth");

router
  .post("/", isAuth, isUser, addToWishlist)
  .delete("/", isAuth, isUser, deleteFromWishlist)
  .get("/:id", isAuth, isUser, findWishlist);

module.exports = router;
