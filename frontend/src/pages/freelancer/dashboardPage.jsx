import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiPieChart, FiAward, FiFolder } from 'react-icons/fi';
import FreelancerNavbar from '../../components/freelancer/dashboardPage/FreelancerNavbar';
import axiosInstance from '../../lib/axios';

const Dashboard = () => {
  // State for storing data
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [statistics, setStatistics] = useState({
    skills: '',
    experience: '',
    applicationsCount: 0,
  });
  const [projects, setProjects] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, jobsRes, projectsRes] = await Promise.all([
          axiosInstance.get('/users/profile'),          // Fetch user profile
          axiosInstance.get('/jobs/applied'),           // Fetch applied jobs
          axiosInstance.get('/projects'),               // Fetch projects
        ]);

        setStatistics({
          skills: userRes.data.skills || 'Not specified',
          experience: userRes.data.experience || 'Not specified',
          applicationsCount: jobsRes.data.length,
        });
        setAppliedJobs(jobsRes.data);
        setProjects(projectsRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <FreelancerNavbar />
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Introduction Section */}
          <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome Back, Freelancer!</h2>
            <p className="text-gray-700 mb-4">
              Ready to explore new opportunities and grow your career? Keep track of your applications and skills here.
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

          {/* Applied Jobs Tracker */}
          <div className="bg-white text-black border border-blue-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Applied Jobs</h3>
            {appliedJobs.length > 0 ? (
              <ul className="space-y-6">
                {appliedJobs.map((job, index) => (
                  <li key={index} className="bg-blue-50 text-black border border-blue-200 rounded-lg shadow-md p-6">
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
    </div>
  );
};

export default Dashboard;
