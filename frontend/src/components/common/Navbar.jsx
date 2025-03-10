import React from 'react';

function Navbar() {
	return (
		<nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				<div className="text-2xl text-white font-bold">Mindlancer</div>
				<div className="hidden md:flex space-x-8">
					<a href="#" className="text-gray-300 hover:text-white transition">
						How It Works
					</a>
					<a href="#" className="text-gray-300 hover:text-white transition">
						Browse Jobs
					</a>
					<a href="#" className="text-gray-300 hover:text-white transition">
						For Businesses
					</a>
					<a href="#" className="text-gray-300 hover:text-white transition">
						For Freelancers
					</a>
				</div>
				<div className="flex space-x-4">
					<button className="text-gray-300 hover:text-white transition">
						Login
					</button>
					<button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;