import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["business", "freelancer"], required: true },
  skills: [String],
  experience: { type: String },
  profilePicture: { type: String }
});

export default mongoose.model("User", userSchema);