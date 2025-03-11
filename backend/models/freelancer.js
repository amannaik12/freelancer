import mongoose from "mongoose";

const FreelancerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [{ type: String, required: true }], // ✅ Change to an array of strings
  experience: { type: String, required: true },
  portfolio: { type: String },
  hourlyRate: { type: Number, required: true },
  certifications: [{ type: String }], // ✅ Array of Strings
  experienceDocs: [{ type: String }], // ✅ Array of Strings (URLs or file references)
  location: { type: String },
  availability: { type: String, enum: ["Full-time", "Part-time", "Freelance"] }, // ✅ Accept specific string values
  github: { type: String },
  linkedin: { type: String },
});

const Freelancer = mongoose.model("Freelancer", FreelancerSchema);
export default Freelancer;