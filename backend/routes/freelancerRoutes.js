import express from "express";
import { getFreelancers, createFreelancerProfile } from "../controllers/freelancerController.js";

const router = express.Router();

router.post("/create", createFreelancerProfile);
router.get("/", getFreelancers);

export default router;
