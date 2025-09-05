import express from "express";
import mongoose from "mongoose";
import Product from "../models/products.model.js";
import { createProduct, deleteProduct, getProudct, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();



router.get("/products/", getProudct)

router.post("/products/", createProduct)

router.put("/products/:id", updateProduct)

router.delete("/products/:id", deleteProduct)


export default router
