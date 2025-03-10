import React from "react";
import { Link } from "react-router-dom";


const BusinessNavbar = () => {
	return (
		<nav className="h-30 bg-gradient-to-r from-purple-900 to-purple-600 p-5 text-white flex justify-between items-center shadow-lg w-full">
			<h1 className="text-4xl font-serif font-bold tracking-wide">Business Hub</h1>

			<div className="flex gap-x-12 text-lg font-medium">
				<Link to="/" className="text-4xl hover:text-gray-500 transition-all">Dashboard</Link>
				<Link to="/PostJob" className="text-4xl hover:text-gray-500 transition-all">Post a Job</Link>
				<Link to="/Applicants" className="text-4xl hover:text-gray-500 transition-all">Applicants</Link>

			</div>

			<button className="text-4xl font-bold bg-purple-500 hover:bg-purple-700 text-white px-10 py-4 rounded-full transition-all">
				Profile
			</button>


		</nav>
	);
};

export default BusinessNavbar;
