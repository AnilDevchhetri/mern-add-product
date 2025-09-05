import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/products.model.js";
import mongoose from "mongoose";
import router from "./routes/product.route.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//allwo use json data in body it is middleware


app.use("/api", router)

app.listen(PORT, () => {
    connectDB();
    console.log("server startss at 5000")
})


// project name mongo: mern-add-product

//https://www.youtube.com/watch?v=O3BUHwfHf84&ab_channel=freeCodeCamp.org
//55

//jsut for refrecne as it not a proudction website
//MONGO_URI = mongodb+srv://chhetrivision_db_user:s3x8n3eKLFvAymuw@cluster0.idakmzl.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0
//PORT = 5000