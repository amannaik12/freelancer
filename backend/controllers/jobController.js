import Job from "../models/Job.js";

/**
 * @desc    Business creates a job listing
 * @route   POST /api/jobs/create
 * @access  Private (Only Business Users)
 */
export const createJob = async (req, res) => {
  try {
    const { title, description, requirements, budget } = req.body;

    if (!title || !description || !requirements || !budget) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (req.user.role !== "business") {
      return res.status(403).json({ message: "Only businesses can post jobs" });
    }

    const job = new Job({
      title,
      description,
      requirements,
      budget,
      postedBy: req.user.id,
    });

    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Get all jobs
 * @route   GET /api/jobs
 * @access  Public
 */
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.status(200).json({ success: true, count: jobs.length, jobs });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Freelancer applies to a job
 * @route   POST /api/jobs/:jobId/apply
 * @access  Private (Only Freelancer Users)
 */
export const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { coverLetter } = req.body;

    if (req.user.role !== "freelancer") {
      return res.status(403).json({ message: "Only freelancers can apply to jobs" });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const alreadyApplied = job.applicants.some(app => app.freelancerId.equals(req.user.id));
    if (alreadyApplied) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }

    job.applicants.push({ freelancerId: req.user.id, coverLetter });
    await job.save();

    res.status(200).json({ message: "Job application submitted successfully" });
  } catch (error) {
    console.error("Error applying to job:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


/**
 * @desc    Get all applications for a specific job
 * @route   GET /api/jobs/:jobId/applications
 * @access  Private (Only Business Users)
 */
export const getJobApplications = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Ensure the user is a business
    if (req.user.role !== "business") {
      return res.status(403).json({ message: "Only businesses can view applications" });
    }

    // Find job and populate applicants with freelancer details
    const job = await Job.findById(jobId).populate({
      path: "applicants.freelancerId",
      model: "User", // Ensure correct reference
      select: "name email skills experience profilePicture",
    });

    console.log("Fetched Job:", job);
    if (!job) return res.status(404).json({ message: "Job not found" });

    // Filter only valid applicants
    const validApplicants = job.applicants.filter((app) => app.freelancerId);
    console.log("Valid Applicants:", validApplicants);

    if (validApplicants.length === 0) {
      return res.status(404).json({ message: "No valid applications found" });
    }

    res.status(200).json({
      success: true,
      jobTitle: job.title,
      applicants: validApplicants.map((app) => ({
        freelancerId: app.freelancerId._id,
        name: app.freelancerId.name,
        email: app.freelancerId.email,
        skills: app.freelancerId.skills,
        experience: app.freelancerId.experience,
        profilePicture: app.freelancerId.profilePicture,
        coverLetter: app.coverLetter,
        appliedAt: app.appliedAt,
      })),
    });
  } catch (error) {
    console.error("Error fetching job applications:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
