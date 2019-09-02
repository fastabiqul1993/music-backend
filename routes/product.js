const express = require("express");
const router = express.Router();
const {
  findProduct,
  findProductById,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");

router.get("/", findProduct);
router.post("/", createProduct);
router.get("/:id", findProductById);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
