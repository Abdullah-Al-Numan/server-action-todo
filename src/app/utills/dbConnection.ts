import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Numan:Numan1234@mongoddb-database.lmwvjja.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectMongo;
