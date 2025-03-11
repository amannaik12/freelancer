import React from 'react';

function AdminNavbar({ currentSection, setCurrentSection, onLogout }) {
	return (
		<nav className="bg-white shadow-md border-b border-blue-200 py-4 px-6 flex items-center justify-between">
			<h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>

			<div className="flex space-x-6">
				<button
					className={`px-4 py-2 rounded transition font-medium ${currentSection === 'freelancers' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
					onClick={() => setCurrentSection('freelancers')}
				>
					Freelancers
				</button>
				<button
					className={`px-4 py-2 rounded transition font-medium ${currentSection === 'businesses' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
					onClick={() => setCurrentSection('businesses')}
				>
					Businesses
				</button>
			</div>

			<button
				onClick={onLogout}
				className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition"
			>
				Logout
			</button>
		</nav>
	);
}

export default AdminNavbar;
