import React from "react";
import { FaBriefcase, FaGlobe, FaIndustry, FaUserTie } from "react-icons/fa";
import { BusinessNavbar } from "../../components/business/index";
const Profile = () => {
	const business = {
		businessName: "Tech Solutions Inc.",
		industry: "Software Development",
		description:
			"Providing innovative software solutions for businesses worldwide. Specializing in AI, Web Development, and Cloud Services.",
		website: "https://techsolutions.com",
	};

	return (
		<div className="bg-white min-h-screen p-6">
			{/* Navbar */}
			<BusinessNavbar />
			<nav className="bg-[#4932FB] text-white p-4 shadow-lg">
				<h1 className="text-2xl font-bold">Business Profile</h1>
			</nav>

			{/* Profile Card */}
			<div className="flex justify-center items-center mt-10">
				<div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-[#9C4DF4] w-full max-w-2xl">
					{/* Hardcoded Person Symbol */}
					<div className="flex justify-center mb-6">
						<FaUserTie className="text-[#4932FB] text-6xl" />
					</div>

					{/* Business Name */}
					<div className="flex items-center gap-3 text-[#4932FB]">
						<FaBriefcase className="text-2xl" />
						<h2 className="text-3xl font-bold">{business.businessName}</h2>
					</div>

					{/* Industry */}
					<div className="flex items-center gap-3 mt-4 text-[#9C4DF4]">
						<FaIndustry className="text-2xl" />
						<p className="text-xl">{business.industry}</p>
					</div>

					{/* Description */}
					<div className="mt-4 text-gray-700 text-lg leading-relaxed">
						{business.description}
					</div>

					{/* Website */}
					<div className="mt-6">
						<a
							href={business.website}
							target="_blank"
							className="flex items-center gap-2 text-lg text-blue-500 hover:underline"
						>
							<FaGlobe className="text-2xl" /> Visit Website
						</a>
					</div>

					{/* Buttons */}
					<div className="mt-6 flex gap-4">
						<button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-md transition-all">
							Edit Profile
						</button>
						<button className="bg-gray-400 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-md transition-all">
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
