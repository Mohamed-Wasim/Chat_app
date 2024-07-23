import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    console.log(URI);
    if (!URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    await mongoose.connect(URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Exit the process with failure
    process.exit(1);
  }
};

export default connectDB;
