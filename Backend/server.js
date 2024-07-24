import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./Config/DataBase.js";
import UserRouter from "./Routes/userRoute.js";
import MessageRouter from "./Routes/messageRoute.js";
const app = express();

// .env
dotenv.config({});
const PORT = process.env.PORT || 5000;

// Middle-Ware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user", UserRouter);
app.use("/app/message", MessageRouter);

// server connection
app.listen(PORT, () => {
  console.log(`server running successfully on port ${PORT}`);
  // MongoDB connection
  connectDB();
});
