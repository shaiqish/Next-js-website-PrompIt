import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    isConnected = true;
    console.log("mongoose is connected");
  } catch (error) {
    console.log(error);
  }
};
