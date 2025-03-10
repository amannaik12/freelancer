import React, { useState } from "react";
import { BusinessNavbar } from "../../components/business/index";

const PostJob = () => {
	const [jobs, setJobs] = useState([]);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		budget: "",
		requirements: "Frontend Developer"
	});

	const jobCategories = [
		"Frontend Developer",
		"Backend Developer",
		"React Native Developer",
		"App Developer",
		"Full Stack Developer"
	];

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setJobs([...jobs, formData]);
		setFormData({ title: "", description: "", budget: "", requirements: "Frontend Developer" });
	};

	return (
		<div className="flex h-screen bg-gradient-to-br from-purple-900 to-purple-600 text-white">

			<div className="flex-1">
				<BusinessNavbar />
				<div className="p-8">
					<h1 className="text-4xl font-bold">Post a Job</h1>
					<p className="text-lg text-gray-300">Create and manage job postings easily.</p>

					{/* Job Posting Form */}
					<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6 text-gray-900">
						<label className="block mb-2 font-semibold">Job Title</label>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>

						<label className="block mt-4 mb-2 font-semibold">Description</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
						></textarea>

						<label className="block mt-4 mb-2 font-semibold">Budget ($)</label>
						<input
							type="number"
							name="budget"
							value={formData.budget}
							onChange={handleChange}
							required
							className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>

						<label className="block mt-4 mb-2 font-semibold">Requirements</label>
						<select
							name="requirements"
							value={formData.requirements}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
						>
							{jobCategories.map((category) => (
								<option key={category} value={category}>{category}</option>
							))}
						</select>

						<button
							type="submit"
							className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg w-full transition-all"
						>
							Post Job
						</button>
					</form>

					{/* Job Listings */}
					<h2 className="text-3xl font-semibold mt-8">Posted Jobs</h2>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{jobs.map((job, index) => (
							<div key={index} className="bg-white p-4 rounded-lg shadow-md text-gray-900 hover:shadow-lg transition-all">
								<h3 className="text-xl font-bold text-purple-700">{job.title}</h3>
								<p className="text-gray-600 mt-2">{job.description}</p>
								<p className="text-gray-800 font-semibold mt-2">Budget: ${job.budget}</p>
								<span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm mt-3">
									{job.requirements}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostJob;
