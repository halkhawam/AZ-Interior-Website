const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, admin, createProduct);

// GET ALL PRODUCTS
router.get("/", getProducts);


// CREATE PRODUCT
router.post("/", createProduct);


// GET SINGLE PRODUCT
router.get("/:id", getProductById);


// UPDATE PRODUCT
router.put("/:id", updateProduct);


// DELETE PRODUCT
router.delete("/:id", deleteProduct);


module.exports = router;