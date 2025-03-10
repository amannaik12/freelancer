import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiSearch, FiLogOut } from "react-icons/fi";

const FreelancerNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Left - Logo shifted slightly to the left */}
        <h1 className="text-3xl font-bold cursor-pointer hover:text-gray-300 transition ml-4">
          MINDLANCER
        </h1>

        {/* Right - Buttons aligned slightly more to the right */}
        <div className="flex items-center space-x-8 mr-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            <FiHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/freelancer/profile"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            <FiUser className="text-xl" />
            <span>Profile</span>
          </Link>
          <Link
            to="/freelancer/jobs"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            <FiSearch className="text-xl" />
            <span>Search Jobs</span>
          </Link>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300"
          >
            <FiLogOut className="text-xl" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FreelancerNavbar;
