import Product from "../models/products.model.js";
export const getProudct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, date: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" })
    }
}