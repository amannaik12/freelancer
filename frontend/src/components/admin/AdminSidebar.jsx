import React from 'react';

function AdminSidebar({ onLogout, currentSection, setCurrentSection }) {
	return (
		<aside className="bg-gray-800 text-white w-64 min-h-screen p-8 flex flex-col">
			<h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
			<nav className="flex flex-col space-y-6">
				<button
					className={`px-4 py-2 rounded transition ${currentSection === 'freelancers' ? 'bg-gray-700' : 'hover:bg-gray-700'
						}`}
					onClick={() => setCurrentSection('freelancers')}
				>
					Freelancers
				</button>
				<button
					className={`px-4 py-2 rounded transition ${currentSection === 'businesses' ? 'bg-gray-700' : 'hover:bg-gray-700'
						}`}
					onClick={() => setCurrentSection('businesses')}
				>
					Businesses
				</button>
			</nav>
			<button
				onClick={onLogout}
				className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
			>
				Logout
			</button>
		</aside>
	);
}

export default AdminSidebar;

