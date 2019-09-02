const express = require("express");
const router = express.Router();
const {
  findProduct,
  findProductByCategory,
  findProductByName,
  findProductById,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");

router.get("/", findProduct);
router.get("/category", findProductByCategory);
router.get("/name", findProductByName);
router.get("/:id", findProductById);
router.post("/", createProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
