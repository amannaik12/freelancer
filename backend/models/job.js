import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [String], required: true },
  budget: { type: Number, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  applicants: [
    {
      freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Ensure correct ref
      coverLetter: String,
      appliedAt: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model("Job", jobSchema);
