import Freelancer from "../models/Freelancer.js";

export const createFreelancerProfile = async (req, res) => {
  try {
    let {
      name,
      skills,
      experience,
      portfolio,
      hourlyRate,
      certifications = [],
      experienceDocs = [],
      location,
      availability,
      github,
      linkedin,
    } = req.body;

    // ✅ Convert `skills` to an array if it's not already
    if (typeof skills === "string") {
      skills = skills.split(",").map((s) => s.trim()); // Convert "React, Node.js" → ["React", "Node.js"]
    }

    // ✅ Ensure `availability` is one of the expected values
    const validAvailabilities = ["Full-time", "Part-time", "Freelance"];
    if (!validAvailabilities.includes(availability)) {
      return res.status(400).json({ message: "Invalid availability option" });
    }

    // ✅ Create Freelancer Profile
    const freelancer = new Freelancer({
      name,
      skills,
      experience,
      portfolio,
      hourlyRate,
      certifications,
      experienceDocs,
      location,
      availability,
      github,
      linkedin,
    });

    await freelancer.save();
    res.status(201).json({ message: "Freelancer profile created", freelancer });
  } catch (error) {
    res.status(500).json({ message: "Error creating profile", error: error.message });
  }
};

// Get all freelancers
export const getFreelancers = async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json(freelancers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching freelancers", error: error.message });
  }
};
