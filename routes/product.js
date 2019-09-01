const express = require("express");
const router = express.Router();
const {
  findProduct,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");

router.get("/", findProduct);
router.post("/", createProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
