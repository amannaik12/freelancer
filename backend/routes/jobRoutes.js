import express from "express";
import { createJob, getJobs, applyToJob, getJobApplications } from "../controllers/jobController.js";
import { verifyToken, checkBusinessUser, checkFreelancerUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Business Creates Job (Only Authenticated Businesses)
router.post("/create", verifyToken, checkBusinessUser, createJob);

// ✅ View All Jobs (Public)
router.get("/", getJobs);

// ✅ Freelancer Applies to a Job
router.post("/:jobId/apply", verifyToken, checkFreelancerUser, applyToJob);

// ✅ Get all applications for a specific job (Only Business Users)
router.get("/:jobId/applications", verifyToken, checkBusinessUser, getJobApplications);

export default router;
