import express from "express";
import { createJob, getJobs, applyToJob, getJobApplications } from "../controllers/jobController.js";
import { verifyToken, checkBusinessUser, checkFreelancerUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, checkBusinessUser, createJob);
router.get("/", getJobs);
router.post("/:jobId/apply", verifyToken, checkFreelancerUser, applyToJob);
router.get("/:jobId/applications", verifyToken, checkBusinessUser, getJobApplications);

export default router;
