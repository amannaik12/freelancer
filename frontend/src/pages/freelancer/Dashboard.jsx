import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiPieChart, FiAward, FiFolder } from 'react-icons/fi';

const Dashboard = () => {
  // State to store applied jobs
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [statistics, setStatistics] = useState({
    skills: 'React, Node.js, MongoDB',
    experience: '3 years of full-stack development',
    applicationsCount: 0,
  });

  // State for projects
  const [projects] = useState([
    { title: 'Job Portal System', description: 'A platform to manage job listings and applications.' },
    { title: 'Bowling Alley Booking', description: 'System for booking slots at a bowling alley.' },
    { title: 'Bank Churn Prediction', description: 'MERN stack app for predicting customer churn.' },
  ]);

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
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Introduction Section */}
        <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome Back, Freelancer!</h2>
          <p className="text-gray-700 mb-4">
            Ready to explore new opportunities and grow your career? Keep track of your applications and skills here.
          </p>
          <p className="text-gray-700">
            This is your dashboard where you can view your applied jobs, track your progress, and explore new opportunities.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-6 text-center">
            <FiAward className="text-blue-600 text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Skills</h3>
            <p className="text-gray-600">{statistics.skills}</p>
          </div>

          <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-6 text-center">
            <FiBriefcase className="text-blue-600 text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Experience</h3>
            <p className="text-gray-600">{statistics.experience}</p>
          </div>

          <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-6 text-center">
            <FiPieChart className="text-blue-600 text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Applications</h3>
            <p className="text-gray-600">{statistics.applicationsCount} jobs applied</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Projects</h3>
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li key={index} className="border border-blue-200 rounded-lg p-6 shadow-md bg-blue-50">
                <h4 className="text-xl font-semibold text-blue-600 mb-2 flex items-center">
                  <FiFolder className="mr-2" /> {project.title}
                </h4>
                <p className="text-gray-700">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Section */}
        <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Portfolio</h3>
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://your-portfolio-link.com
          </a>
        </div>

        {/* Applied Jobs Tracker */}
        <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Applied Jobs</h3>
          {appliedJobs.length > 0 ? (
            <ul className="space-y-6">
              {appliedJobs.map((job, index) => (
                <li
                  key={index}
                  className="bg-blue-50 text-black border border-blue-200 rounded-lg shadow-md p-6"
                >
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{job.title}</h4>
                  <p className="text-gray-700 mb-1">{job.company} - {job.location}</p>
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
};

export default Dashboard;
