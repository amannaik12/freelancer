import Freelancer from "../models/Freelancer.js";

// ✅ Create Freelancer Profile
export const createFreelancerProfile = async (req, res) => {
  try {
    const freelancer = new Freelancer(req.body);
    await freelancer.save();
    res.status(201).json({ message: "Freelancer profile created", freelancer });
  } catch (error) {
    res.status(500).json({ message: "Error creating profile", error: error.message });
  }
};

// ✅ Get All Freelancers
export const getFreelancers = async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching freelancers", error: error.message });
  }
};
