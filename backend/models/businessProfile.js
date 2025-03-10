import mongoose from "mongoose";

const BusinessProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  businessName: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
}, { timestamps: true });

const BusinessProfile = mongoose.model("BusinessProfile", BusinessProfileSchema);
export default BusinessProfile;
