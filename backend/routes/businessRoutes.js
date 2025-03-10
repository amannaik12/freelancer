import express from "express";
import {
  createOrUpdateBusinessProfile,
  getBusinessProfile,
  getAllBusinessProfiles,
  deleteBusinessProfile
} from "../controllers/businessProfileController.js";

import { verifyToken, checkBusinessUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create or Update Business Profile
router.post("/profile", verifyToken, checkBusinessUser, createOrUpdateBusinessProfile);

// ✅ Get Business Profile by User ID
router.get("/profile/:userId", getBusinessProfile);

// ✅ Get All Business Profiles
router.get("/profiles", getAllBusinessProfiles);

// ✅ Delete Business Profile
router.delete("/profile", verifyToken, checkBusinessUser, deleteBusinessProfile);

export default router;
