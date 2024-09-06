import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"; // Import the controller functions

const router = express.Router();

// Route to fetch all products
router.get("/", getProducts);

// Route to create a new product
router.post("/", createProduct);

// Route to update a product by ID
router.put("/:id", updateProduct);

// Route to delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
