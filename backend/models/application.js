import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer", required: true },
    coverLetter: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
}, { timestamps: true });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
