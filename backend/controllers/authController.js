import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";
import User from "../models/user.js";
import Otp from "../models/otp.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// 🔹 Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// 🔹 Function to Send OTP
async function sendOtpEmail(email, otp) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Mindlancer Verification ",
      text: `Your id is: ${otp}\n You have successfully signed in.`,
    });
    console.log(`📧 OTP sent to ${email}`);
  } catch (error) {
    console.error("❌ Error sending OTP email:", error.message);
    throw new Error("Failed to send OTP email");
  }
}

// 🔹 Signup Route
export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const validRoles = ["freelancer", "business", "admin"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role selected" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    // ✅ Save user first
    const savedUser = await newUser.save();

    // ✅ Generate OTP
    const otp = crypto.randomInt(100000, 999999);
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    // ✅ Store OTP
    await Otp.create({ userId: savedUser._id, otp, otpExpires });

    // ✅ Send OTP Email
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent for verification", email });
  } catch (error) {
    console.error("❌ Signup Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Verify OTP
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otpRecord = await Otp.findOne({ userId: user._id });
    if (!otpRecord || otpRecord.otp !== parseInt(otp, 10)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (new Date(otpRecord.otpExpires) < new Date()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    user.isVerified = true;
    await user.save();
    await Otp.deleteOne({ userId: user._id });

    res.status(200).json({ message: "OTP verified, account activated" });
  } catch (error) {
    console.error("❌ OTP Verification Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Login Route
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
