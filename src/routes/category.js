const express = require("express");
const router = express.Router();
const {
  findCategory,
  createCategory,
  patchCategory,
  deleteCategory
} = require("../controllers/category");
const { isAuth, isAdmin } = require("../middleware/auth");

router
  .get("/", findCategory)
  .post("/", isAuth, isAdmin, createCategory)
  .patch("/:id", isAuth, isAdmin, patchCategory)
  .delete("/:id", isAuth, isAdmin, deleteCategory);

module.exports = router;
