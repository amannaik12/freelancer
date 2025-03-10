import Job from "../models/job.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const newJob = new Job({ ...req.body, postedBy: req.user.id });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
};

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// Apply to a job
export const applyToJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });

    job.applicants.push({ freelancerId: req.user.id, coverLetter: req.body.coverLetter });
    await job.save();
    res.status(200).json({ message: "Application submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to apply for job" });
  }
};

// Get applications for a job
export const getJobApplications = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId).populate("applicants.freelancerId", "name skills");
    if (!job) return res.status(404).json({ error: "Job not found" });

    res.status(200).json(job.applicants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};
