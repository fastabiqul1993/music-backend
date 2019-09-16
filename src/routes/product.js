const express = require("express");
const router = express.Router();
const {
  findProduct,
  findProductById,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");
const { isAuth, isAdmin } = require("../middleware/auth");

router
  .get("/", findProduct)
  .post("/", isAuth, isAdmin, createProduct)
  .get("/:id", findProductById)
  .patch("/:id", isAuth, isAdmin, patchProduct)
  .delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = router;
