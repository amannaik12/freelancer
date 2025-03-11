import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Default role as empty
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setError("Email, Password, and Role are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("token", data.token);  // Save token to localStorage

      // Navigate based on user role
      switch (data.role) {
        case "admin":
          navigate("/admin");
          break;
        case "freelancer":
          navigate("/freelancer");
          break;
        case "business":
          navigate("/business");
          break;
        default:
          setError("Invalid user role");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-6">Enter your credentials</p>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded"
            required
          />

          {/* Role Selection Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded bg-white text-gray-700"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="freelancer">Freelancer</option>
            <option value="business">Business</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
