import express from "express";
import mongoose from "mongoose";
import Product from "../models/products.model.js";
import { getProudct } from "../controllers/product.controller.js";
const router = express.Router();



router.get("/", getProudct)

router.post("/", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }


    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.log("error in create product", error.message)
        res.status(500).json({ success: false, message: "server error" })
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }
    try {
        const updatedProudct = await Product.findByIdAndUpdate(id, product, { new: true });
        return res.status(201).json({ success: true, data: updatedProudct })
    } catch (error) {
        return res.status(404).json({ success: false, message: "SErver error" })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" })
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" })
    }
})


export default router
