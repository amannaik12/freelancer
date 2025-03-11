import React, { useState } from "react";
import { signupUser, verifyOtp } from "../../api/authApi";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
	e.preventDefault();
	setError("");
	try {
	  const response = await signupUser(formData);
	  setSuccess(response.message);
	  setStep(2);
	} catch (err) {
	  console.log("Signup Error:", err.response?.data);  // Log the error response
	  setError(err.response?.data?.message || "Signup failed. Please try again.");
	}
  };

  const handleOtpVerification = async () => {
    setError("");
    try {
      const response = await verifyOtp({ email: formData.email, otp });
      setSuccess(response.message);
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-blue-200">
        {step === 1 ? (
          <form onSubmit={handleSignup}>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mb-2 p-2 border rounded"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="">Select Role</option>
              <option value="freelancer">Freelancer</option>
              <option value="business">Business</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleOtpVerification}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Verify OTP
            </button>
          </div>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </div>
    </div>
  );
}

export default Signup;
