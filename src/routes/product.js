const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
  findForSearch,
  findProduct,
  findProductById,
  createProduct,
  patchProduct,
  deleteProduct
} = require("../controllers/product");
const { isAuth, isAdmin } = require("../middleware/auth");
const imgUpload = require("../middleware/upload");

router
  .get("/", findProduct)
  .get("/search", findForSearch)
  .post("/", isAuth, isAdmin, upload.single("image"), imgUpload, createProduct)
  .get("/:id", findProductById)
  .patch("/:id", isAuth, isAuth, patchProduct)
  .delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = router;
