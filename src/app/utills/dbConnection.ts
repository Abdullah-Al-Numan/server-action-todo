import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    process.env.MONGODB_URL &&
      (await mongoose.connect(process.env.MONGODB_URL));
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectMongo;
