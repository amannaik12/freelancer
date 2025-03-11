import express from "express";
import { signup, login, verifyOtp } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup); // SignUp with OTP
router.post("/verify-otp", verifyOtp); // OTP Verification
router.post("/login", login); // Login without OTP

export default router;
