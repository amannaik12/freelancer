import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-20 relative bg-gradient-to-b from-indigo-50 to-blue-100 text-blue-800 py-4 shadow-md w-full flex justify-center items-center">
      {/* Logo Centered with Glow Effect */}
      <h1
        className="text-4xl font-bold cursor-pointer transition transform hover:scale-105 hover:text-blue-500"
        onClick={() => navigate('/')}
      >
        .MINDLANCER
      </h1>
    </nav>
  );
};

export default Navbar;
