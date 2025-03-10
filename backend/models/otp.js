import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  otp: { type: Number, required: true },
  otpExpires: { type: Date, required: true },
});

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;
