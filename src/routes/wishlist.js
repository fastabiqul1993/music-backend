const express = require("express");
const router = express.Router();
const {
  findWishlist,
  addToWishlist,
  deleteFromWishlist
} = require("../controllers/wishlist");
const { isAuth, isUser } = require("../middleware/auth");

router
  .all("/*", isAuth, isUser)
  .post("/", addToWishlist)
  .get("/:id", findWishlist)
  .delete("/:id", deleteFromWishlist);

module.exports = router;
