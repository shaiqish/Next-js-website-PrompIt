import mongoose from "mongoose";
import { connectToDB } from "@utils/database";

await connectToDB();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email required."],
    unique: [true, "Email already exists."],
    lowercase: true,
    trim: true,
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
