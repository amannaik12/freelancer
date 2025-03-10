import React, { useState, useEffect } from "react";
import { FiBriefcase, FiPieChart, FiAward, FiCheckCircle, FiLink } from "react-icons/fi";
import FreelancerNavbar from "../../components/freelancer/dashboardPage/FreelancerNavbar";

const Dashboard = () => {
  const [freelancerInfo, setFreelancerInfo] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Fetch freelancer profile
    fetch("http://localhost:5000/api/freelancers/1") // Change 1 to actual freelancer ID
      .then((res) => res.json())
      .then((data) => setFreelancerInfo(data))
      .catch((err) => console.error("Error fetching freelancer data:", err));

    // Fetch applied jobs
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-black">
      <FreelancerNavbar />

      <div className="pt-28 px-6 md:px-16 flex flex-col items-center">
        <div className="max-w-7xl w-full space-y-10">
          {freelancerInfo && (
            <div className="bg-white border border-blue-400 rounded-2xl shadow-xl p-10 text-center hover:shadow-blue-400/50 transition-all">
              <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
                Welcome, {freelancerInfo.name}!
              </h2>
              <p className="text-gray-700 text-lg font-medium">
                Monitor your progress and manage your applications efficiently.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freelancerInfo && [
              { icon: <FiAward />, title: "Skills", value: freelancerInfo.skills.join(", ") },
              { icon: <FiBriefcase />, title: "Experience", value: freelancerInfo.experience },
              { icon: <FiPieChart />, title: "Hourly Rate", value: `$${freelancerInfo.hourlyRate}/hr` },
              { icon: <FiCheckCircle />, title: "Availability", value: freelancerInfo.availability },
              { icon: <FiLink />, title: "Portfolio", value: <a href={freelancerInfo.portfolio} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Portfolio</a> },
              { icon: <FiLink />, title: "GitHub", value: <a href={freelancerInfo.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub Profile</a> },
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-blue-400 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all duration-300">
                <div className="text-blue-600 text-6xl mb-3">{stat.icon}</div>
                <h3 className="text-xl font-bold text-blue-700">{stat.title}</h3>
                <p className="text-gray-600 text-center text-lg font-medium">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-blue-400 rounded-2xl shadow-xl p-12 w-full hover:shadow-blue-400/50 transition-all">
            <h3 className="text-4xl font-bold text-blue-700 mb-8 text-center">Applied Jobs</h3>
            {appliedJobs.length > 0 ? (
              <ul className="space-y-6">
                {appliedJobs.map((job, index) => (
                  <li key={index} className="bg-blue-50 border border-blue-400 rounded-xl shadow-md p-6 text-center hover:bg-blue-100 transition-all">
                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h4>
                    <p className="text-gray-700 text-lg">{job.company} - {job.location}</p>
                    <p className="text-gray-600 font-medium">
                      Status: <span className="text-green-600 font-bold">{job.status || "Applied"}</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-center text-lg font-medium">No jobs applied yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
