import React, { useState, useEffect } from 'react';
import { FiSearch, FiSend, FiCheckCircle } from 'react-icons/fi';

const SearchJobs = () => {
	const jobsData = [
		{ id: 1, title: 'Frontend Developer', company: 'Mindlancer Inc.', location: 'Remote' },
		{ id: 2, title: 'Backend Developer', company: 'Tech Solutions', location: 'On-site' },
		{ id: 3, title: 'UI/UX Designer', company: 'Creative Minds', location: 'Hybrid' },
		{ id: 4, title: 'React Developer', company: 'Innovate Corp.', location: 'Remote' },
		{ id: 5, title: 'Full-stack Developer', company: 'DevHub', location: 'Remote' },
	];

	const [jobs, setJobs] = useState(jobsData);
	const [search, setSearch] = useState('');
	const [selectedJob, setSelectedJob] = useState(null);
	const [applicationMessage, setApplicationMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [appliedJobs, setAppliedJobs] = useState([]);

	useEffect(() => {
		const savedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
		setAppliedJobs(savedJobs);
	}, []);

	const saveToLocalStorage = (jobs) => {
		localStorage.setItem('appliedJobs', JSON.stringify(jobs));
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
		if (e.target.value === '') {
			setJobs(jobsData);
		} else {
			const filteredJobs = jobsData.filter((job) =>
				job.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
				job.company.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setJobs(filteredJobs);
		}
	};

	const handleApply = (job) => {
		setSelectedJob(job);
		setApplicationMessage('');
		setSuccessMessage('');
	};

	const handleSubmitApplication = () => {
		if (applicationMessage.trim()) {
			const updatedAppliedJobs = [...appliedJobs, selectedJob];
			setAppliedJobs(updatedAppliedJobs);
			saveToLocalStorage(updatedAppliedJobs);
			setSuccessMessage('Application sent successfully!');
			setSelectedJob(null);
		}
	};

	return (
		<div className="min-h-screen bg-white text-blue-900 py-8 px-4 font-sans">
			<div className="max-w-5xl mx-auto bg-blue-50 text-blue-900 rounded-2xl shadow-lg p-8">
				<h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">Search Jobs</h2>

				{/* Search Input */}
				<div className="flex items-center bg-white rounded-md shadow-md mb-20 pb-4 px-4 p-2 border border-blue-300">
					<FiSearch className="text-blue-500 ml-2" />
					<input
						type="text"
						placeholder="Search for jobs..."
						value={search}
						onChange={handleSearch}
						className="w-full p-2 outline-none text-blue-800"
					/>
				</div>

				{/* Job Listings */}
				<div className="space-y-6">
					{jobs.map((job) => (
						<div
							key={job.id}
							className="p-4 border-b rounded-lg bg-blue-100 text-blue-900 shadow-md transition-transform transform hover:scale-105"
						>
							<h3 className="text-xl font-bold">{job.title}</h3>
							<p className="text-sm">{job.company} - {job.location}</p>
							<button
								onClick={() => handleApply(job)}
								className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 transition"
							>
								Apply
							</button>
						</div>
					))}
				</div>

				{/* Application Modal */}
				{selectedJob && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg max-w-md w-full">
							<h3 className="text-2xl font-bold text-blue-700 mb-4">Apply for {selectedJob.title}</h3>
							<textarea
								placeholder="Write your message..."
								value={applicationMessage}
								onChange={(e) => setApplicationMessage(e.target.value)}
								className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
							></textarea>
							<div className="flex justify-end space-x-4">
								<button
									onClick={() => setSelectedJob(null)}
									className="bg-gray-400 text-white py-1 px-4 rounded-lg hover:bg-gray-500 transition"
								>
									Cancel
								</button>
								<button
									onClick={handleSubmitApplication}
									className="bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
								>
									<FiSend />
									<span>Send</span>
								</button>
							</div>
						</div>
					</div>
				)}

				{/* Success Message */}
				{successMessage && (
					<div className="mt-6 text-center text-green-600 flex items-center justify-center space-x-2">
						<FiCheckCircle />
						<span>{successMessage}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchJobs;
