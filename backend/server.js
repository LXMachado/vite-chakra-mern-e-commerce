import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/.env") }); // Explicitly load .env

console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Debugging

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
