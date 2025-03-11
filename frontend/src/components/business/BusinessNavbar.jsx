import React from "react";
import { Link } from "react-router-dom";


const BusinessNavbar = () => {
  return (
    <nav className="h-20 bg-blue-600 p-5 text-white flex justify-between items-center shadow-lg w-full">
     {/* Logo */}
     <h1 className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition">
          .MINDLANCER
        </h1>
      
      <div className="flex gap-x-12 text-lg font-small">
				<Link to="/" className="text-2xl hover:text-gray-500 transition-all">Dashboard</Link>
			<Link to="/PostJob" className="text-2xl hover:text-gray-500 transition-all">Post a Job</Link>
			<Link to="/Applicants" className="text-2xl hover:text-gray-500 transition-all">Applicants</Link>
			<Link to="/profile" className="text-2xl hover:text-gray-500 transition-all">
   
    Profile
  
</Link>
	</div>
	



    </nav>
  );
};

export default BusinessNavbar;