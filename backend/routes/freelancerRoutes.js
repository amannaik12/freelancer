import express from "express"; // Import express
import { getFreelancers, createFreelancerProfile } from "../controllers/freelancerController.js"; // Import freelancerController

const router = express.Router();

// Create a freelancer profile
router.post("/create", createFreelancerProfile);

// Get all freelancers
router.get("/", getFreelancers);

export default router;
