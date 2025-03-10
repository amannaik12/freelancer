import React from 'react';

const JobCard = ({ job }) => {
	return (
		<div className="bg-white text-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition">
			<h3 className="text-xl font-semibold text-[#4A148C]">{job.title}</h3>
			<p className="text-gray-600">{job.company}</p>
			<p className="text-gray-500 mb-4">{job.location}</p>
			<button className="bg-gradient-to-r from-[#6A1B9A] to-[#9C27B0] text-white py-2 px-4 rounded-md hover:scale-105 transition transform duration-200">
				Apply Now
			</button>
		</div>
	);
};

export default JobCard;
