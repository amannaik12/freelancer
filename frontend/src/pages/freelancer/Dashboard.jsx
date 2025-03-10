import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiPieChart, FiAward } from 'react-icons/fi';

const Dashboard = () => {
<<<<<<< HEAD
  // State to store applied jobs
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [statistics, setStatistics] = useState({
    skills: 'React, Node.js, MongoDB',
    experience: '3 years of full-stack development',
    applicationsCount: 0,
  });

  // Fetch applied jobs from local storage or API
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(storedJobs);
    setStatistics((prev) => ({
      ...prev,
      applicationsCount: storedJobs.length,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black py-16 px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Introduction Section */}
<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 mb-30">
  <h2 className="text-4xl font-bold text-blue-700 mb-20">Welcome Back, Freelancer!</h2>
  <p className="text-gray-700 mb-30 mt-20">
    Ready to explore new opportunities and grow your career? Keep track of your applications and skills here.
  </p>
  <p className="text-gray-700">
    This is your dashboard where you can view your applied jobs, track your progress, and explore new opportunities.
  </p>
</div>


        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
            <FiAward className="text-blue-600 text-5xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Skills</h3>
              <p className="text-gray-600">{statistics.skills}</p>
            </div>
          </div>

          <div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
            <FiBriefcase className="text-blue-600 text-5xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Experience</h3>
              <p className="text-gray-600">{statistics.experience}</p>
            </div>
          </div>

          <div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
            <FiPieChart className="text-blue-600 text-5xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Applications</h3>
              <p className="text-gray-600">{statistics.applicationsCount} jobs applied</p>
            </div>
          </div>
        </div>

        {/* Applied Jobs Tracker */}
        <div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Applied Jobs</h3>
          {appliedJobs.length > 0 ? (
            <ul className="space-y-8">
              {appliedJobs.map((job, index) => (
                <li
                  key={index}
                  className="bg-blue-50 text-black border border-blue-200 rounded-xl shadow-md p-8"
                >
                  <h4 className="text-2xl font-semibold text-blue-600 mb-4">{job.title}</h4>
                  <p className="text-gray-700 mb-2">{job.company} - {job.location}</p>
                  <p className="text-gray-600">
                    Status: <span className="text-green-600 font-semibold">Applied</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No jobs applied yet.</p>
          )}
        </div>
      </div>
    </div>
  );
=======
	// State to store applied jobs
	const [appliedJobs, setAppliedJobs] = useState([]);
	const [statistics, setStatistics] = useState({
		skills: 'React, Node.js, MongoDB',
		experience: '3 years of full-stack development',
		applicationsCount: 0,
	});

	// Fetch applied jobs from local storage or API
	useEffect(() => {
		const storedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
		setAppliedJobs(storedJobs);
		setStatistics((prev) => ({
			...prev,
			applicationsCount: storedJobs.length,
		}));
	}, []);

	return (
		<div className="min-h-screen bg-white text-black py-16 px-8">
			<div className="max-w-6xl mx-auto space-y-16">

				{/* Introduction Section */}
				<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 mb-30">
					<h2 className="text-4xl font-bold text-blue-700 mb-20">Welcome Back, Freelancer!</h2>
					<p className="text-gray-700 mb-30 mt-20">
						Ready to explore new opportunities and grow your career? Keep track of your applications and skills here.
					</p>
					<p className="text-gray-700">
						This is your dashboard where you can view your applied jobs, track your progress, and explore new opportunities.
					</p>
				</div>


				{/* Statistics Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
					<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
						<FiAward className="text-blue-600 text-5xl" />
						<div>
							<h3 className="text-xl font-semibold text-blue-700">Skills</h3>
							<p className="text-gray-600">{statistics.skills}</p>
						</div>
					</div>

					<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
						<FiBriefcase className="text-blue-600 text-5xl" />
						<div>
							<h3 className="text-xl font-semibold text-blue-700">Experience</h3>
							<p className="text-gray-600">{statistics.experience}</p>
						</div>
					</div>

					<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10 flex items-center space-x-6">
						<FiPieChart className="text-blue-600 text-5xl" />
						<div>
							<h3 className="text-xl font-semibold text-blue-700">Applications</h3>
							<p className="text-gray-600">{statistics.applicationsCount} jobs applied</p>
						</div>
					</div>
				</div>

				{/* Applied Jobs Tracker */}
				<div className="bg-white text-black border border-blue-200 rounded-xl shadow-lg p-10">
					<h3 className="text-3xl font-bold text-blue-700 mb-8">Applied Jobs</h3>
					{appliedJobs.length > 0 ? (
						<ul className="space-y-8">
							{appliedJobs.map((job, index) => (
								<li
									key={index}
									className="bg-blue-50 text-black border border-blue-200 rounded-xl shadow-md p-8"
								>
									<h4 className="text-2xl font-semibold text-blue-600 mb-4">{job.title}</h4>
									<p className="text-gray-700 mb-2">{job.company} - {job.location}</p>
									<p className="text-gray-600">
										Status: <span className="text-green-600 font-semibold">Applied</span>
									</p>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-600">No jobs applied yet.</p>
					)}
				</div>
			</div>
		</div>
	);
>>>>>>> e0f2d05 (Aman Please Integrate)
};

export default Dashboard;
