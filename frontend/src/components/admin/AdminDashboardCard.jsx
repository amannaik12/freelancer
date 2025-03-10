import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

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
		<div className="flex">
			<AdminSidebar
				onLogout={handleLogout}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>
			<main className="flex-1 p-10 bg-gray-50 min-h-screen">
				<h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
				<div className="mb-8">
					<input
						type="text"
						placeholder="Search by name..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
					/>
				</div>
				{currentSection === 'freelancers' && (
					<section>
						<h2 className="text-2xl font-semibold mb-6">Freelancers</h2>
						{filteredFreelancers.length === 0 ? (
							<p className="text-gray-600">No freelancers found.</p>
						) : (
							<div className="overflow-x-auto">
								<table className="min-w-full bg-white rounded-lg shadow">
									<thead className="bg-gray-200">
										<tr>
											<th className="py-3 px-6 text-left">Name</th>
											<th className="py-3 px-6 text-left">Skills</th>
											<th className="py-3 px-6 text-left">Actions</th>
										</tr>
									</thead>
									<tbody>
										{filteredFreelancers.map((f) => (
											<tr key={f.id} className="border-b hover:bg-gray-100">
												<td className="py-3 px-6">{f.name}</td>
												<td className="py-3 px-6">{f.skills}</td>
												<td className="py-3 px-6">
													<button
														onClick={() => handleDeleteFreelancer(f.id)}
														className="text-red-500 hover:underline"
													>
														Delete
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</section>
				)}
				{currentSection === 'businesses' && (
					<section>
						<h2 className="text-2xl font-semibold mb-6">Businesses</h2>
						{filteredBusinesses.length === 0 ? (
							<p className="text-gray-600">No businesses found.</p>
						) : (
							<div className="overflow-x-auto">
								<table className="min-w-full bg-white rounded-lg shadow">
									<thead className="bg-gray-200">
										<tr>
											<th className="py-3 px-6 text-left">Name</th>
											<th className="py-3 px-6 text-left">Industry</th>
											<th className="py-3 px-6 text-left">Actions</th>
										</tr>
									</thead>
									<tbody>
										{filteredBusinesses.map((b) => (
											<tr key={b.id} className="border-b hover:bg-gray-100">
												<td className="py-3 px-6">{b.name}</td>
												<td className="py-3 px-6">{b.industry}</td>
												<td className="py-3 px-6">
													<button
														onClick={() => handleDeleteBusiness(b.id)}
														className="text-red-500 hover:underline"
													>
														Delete
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</section>
				)}
			</main>
		</div>
	);
}

export default AdminDashboardCard;

