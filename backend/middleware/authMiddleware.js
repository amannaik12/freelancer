import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret"; // Ensure a fallback

// ✅ Middleware to verify JWT token
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      console.log("No token provided");
      return res.status(401).json({ message: "Access denied" });
    }

    // Decode token
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      console.log("User not found in database");
      return res.status(401).json({ message: "Invalid token" });
    }

    console.log("User Role:", req.user.role); // ✅ Debugging log

    next();
  } catch (error) {
    console.log("JWT Error:", error.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

// ✅ Middleware to check if user is verified
export const checkVerifiedUser = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) {
      return res.status(403).json({ message: "User is not verified" });
    }

    next();
  } catch (error) {
    console.error("❌ Error checking verified user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Middleware to check if user is a business
export const checkBusinessUser = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required" });
  }
  if (req.user.role !== "business") {
    return res.status(403).json({ message: "Access denied. Business accounts only." });
  }
  next();
};

// ✅ Middleware to check if user is a freelancer
export const checkFreelancerUser = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required" });
  }
  if (req.user.role !== "freelancer") {
    return res.status(403).json({ message: "Access denied. Freelancers only." });
  }
  next();
};
