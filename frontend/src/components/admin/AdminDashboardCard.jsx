import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

function AdminDashboardCard() {
	const [freelancers, setFreelancers] = useState([
		{ id: 1, name: 'John Doe', skills: 'Web Development' },
		{ id: 2, name: 'Jane Smith', skills: 'Graphic Design' },
	]);
	const [businesses, setBusinesses] = useState([
		{ id: 1, name: 'Acme Corp', industry: 'E-commerce' },
		{ id: 2, name: 'Tech Solutions', industry: 'Software' },
	]);

	const [currentSection, setCurrentSection] = useState('freelancers');
	const [searchTerm, setSearchTerm] = useState('');

	const handleLogout = () => {
		alert('Logging out...');
	};

	const handleDeleteFreelancer = (id) => {
		setFreelancers((prev) => prev.filter((f) => f.id !== id));
	};

	const handleDeleteBusiness = (id) => {
		setBusinesses((prev) => prev.filter((b) => b.id !== id));
	};

	const filteredFreelancers = freelancers.filter((f) =>
		f.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const filteredBusinesses = businesses.filter((b) =>
		b.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="bg-gray-100 min-h-screen">
			<AdminNavbar
				onLogout={handleLogout}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>

			<main className="p-10 max-w-6xl mx-auto">
				<div className="mb-6">
					<input
						type="text"
						placeholder="Search by name..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>

				{/* Freelancer Section */}
				{currentSection === 'freelancers' && (
					<section>
						<h2 className="text-2xl font-semibold mb-4 text-blue-700">Freelancers</h2>
						{filteredFreelancers.length === 0 ? (
							<p className="text-gray-600">No freelancers found.</p>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredFreelancers.map((f) => (
									<div key={f.id} className="bg-white border border-blue-200 rounded-lg shadow-lg p-6 flex flex-col">
										<h3 className="text-xl font-semibold text-blue-600">{f.name}</h3>
										<p className="text-gray-700 mt-2">Skills: {f.skills}</p>
										<button
											onClick={() => handleDeleteFreelancer(f.id)}
											className="mt-auto text-red-500 hover:text-red-600 font-medium transition"
										>
											Delete
										</button>
									</div>
								))}
							</div>
						)}
					</section>
				)}

				{/* Business Section */}
				{currentSection === 'businesses' && (
					<section>
						<h2 className="text-2xl font-semibold mb-4 text-blue-700">Businesses</h2>
						{filteredBusinesses.length === 0 ? (
							<p className="text-gray-600">No businesses found.</p>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredBusinesses.map((b) => (
									<div key={b.id} className="bg-white border border-blue-200 rounded-lg shadow-lg p-6 flex flex-col">
										<h3 className="text-xl font-semibold text-blue-600">{b.name}</h3>
										<p className="text-gray-700 mt-2">Industry: {b.industry}</p>
										<button
											onClick={() => handleDeleteBusiness(b.id)}
											className="mt-auto text-red-500 hover:text-red-600 font-medium transition"
										>
											Delete
										</button>
									</div>
								))}
							</div>
						)}
					</section>
				)}
			</main>
		</div>
	);
}

export default AdminDashboardCard;