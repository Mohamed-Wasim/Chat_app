import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/DataBase.js";
import UserRouter from "./Routes/userRoute.js";
const app = express();

// .env
dotenv.config({});
const PORT = process.env.PORT || 5000;

// Middle-Ware
app.use(express.json());

// routes
app.use("/api/user", UserRouter);

// server connection
app.listen(PORT, () => {
  console.log(`server running successfully on port ${PORT}`);
  // MongoDB connection
  connectDB();
});
