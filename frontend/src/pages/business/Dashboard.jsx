import React from "react";
import { BusinessNavbar } from "../../components/business/index";

const Dashboard = () => {
	return (
		<div className="flex h-screen bg-gradient-to-br from-purple-900 to-purple-600 text-white">



			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Navbar */}
				<BusinessNavbar />

				{/* Dashboard Content */}
				<div className="p-8">
					<h1 className="text-4xl font-bold mb-4">Welcome to Your Business Dashboard</h1>
					<p className="text-lg text-gray-200 mb-6">
						Manage your proposals, clients, and track progress in one place.
					</p>

					{/* Overview Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 transition-all">
							<h2 className="text-xl font-semibold">Total Jobs Posted</h2>
							<p className="text-gray-600">12</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 transition-all">
							<h2 className="text-xl font-semibold">Applications Received</h2>
							<p className="text-gray-600">25</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 transition-all">
							<h2 className="text-xl font-semibold">Interviews Scheduled</h2>
							<p className="text-gray-600">8</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
