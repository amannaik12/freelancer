import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiSearch, FiLogOut } from 'react-icons/fi';

const FreelancerNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-15 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition">
          .MINDLANCER
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12 gap-10">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FiHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/freelancer/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FiUser className="text-xl" />
            <span>Profile</span>
          </Link>
          <Link
            to="/freelancer/jobs"
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FiSearch className="text-xl" />
            <span>Search Jobs</span>
          </Link>
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
