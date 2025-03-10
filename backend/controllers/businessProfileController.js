import BusinessProfile from "../models/businessProfile.js";

/**
 * @desc    Create or update business profile
 * @route   POST /api/business/profile
 * @access  Private (Only Business Users)
 */
export const createOrUpdateBusinessProfile = async (req, res) => {
  try {
    console.log("User Data in Controller:", req.user);  // ✅ Debugging log

    if (!req.user || req.user.role !== "business") {
      return res.status(403).json({ message: "Only business users can perform this action" });
    }

    const { businessName, industry, description, website } = req.body;
    if (!businessName || !industry || !description || !website) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const businessProfile = await BusinessProfile.findOneAndUpdate(
      { user: req.user.id },
      { businessName, industry, description, website, user: req.user.id },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, businessProfile });
  } catch (error) {
    console.error("Error creating/updating business profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Get a business profile by user ID
 * @route   GET /api/business/profile/:userId
 * @access  Public
 */
export const getBusinessProfile = async (req, res) => {
  try {
    const businessProfile = await BusinessProfile.findOne({ user: req.params.userId });

    if (!businessProfile) {
      return res.status(404).json({ message: "Business profile not found" });
    }

    res.status(200).json({ success: true, businessProfile });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Get all business profiles
 * @route   GET /api/business/profiles
 * @access  Public
 */
export const getAllBusinessProfiles = async (req, res) => {
  try {
    const profiles = await BusinessProfile.find();
    res.status(200).json({ success: true, count: profiles.length, profiles });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc    Delete business profile
 * @route   DELETE /api/business/profile
 * @access  Private (Only Business Users)
 */
export const deleteBusinessProfile = async (req, res) => {
  try {
    await BusinessProfile.findOneAndDelete({ user: req.user.id });
    res.status(200).json({ success: true, message: "Business profile deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
