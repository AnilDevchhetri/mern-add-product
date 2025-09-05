import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/products.model.js";
import mongoose from "mongoose";
import router from "./routes/product.route.js";

dotenv.config()
const app = express();

app.use(express.json());//allwo use json data in body it is middleware


app.use("/api/products", router)

app.listen(5000, () => {
    connectDB();
    console.log("server startss at 5000")
})


// project name mongo: mern-add-product

//https://www.youtube.com/watch?v=O3BUHwfHf84&ab_channel=freeCodeCamp.org
//50