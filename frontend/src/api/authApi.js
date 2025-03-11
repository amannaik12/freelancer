import axios from "axios";

// Set the base URL for your backend API
const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Ensure this matches your backend URL
});

// Login API Call
export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed. Please try again.";
  }
};

// Signup API Call
export const signupUser = async (formData) => {
  try {
    const response = await API.post("/signup", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed. Please try again.";
  }
};

// Verify OTP API Call
export const verifyOtp = async (data) => {
  try {
    const response = await API.post("/verify-otp", data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "OTP verification failed. Please try again.";
  }
};

// Export the APIs
export default API;