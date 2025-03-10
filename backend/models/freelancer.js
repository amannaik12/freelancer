import mongoose from "mongoose";

const FreelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [{ type: String, required: true }],
  experience: { type: String, required: true },
  portfolio: { type: String },
  hourlyRate: { type: Number, required: true },
  certifications: [{ type: String }],
  experienceDocs: [{ type: String }],
  location: { type: String },
  availability: { type: String, enum: ["Full-time", "Part-time", "Freelance"] },
  github: { type: String },
  linkedin: { type: String },
});

const Freelancer = mongoose.model("Freelancer", FreelancerSchema);
export default Freelancer;
