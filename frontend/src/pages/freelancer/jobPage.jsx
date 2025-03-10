import React, { useState, useEffect } from 'react';
import { FiSearch, FiSend, FiCheckCircle } from 'react-icons/fi';

const SearchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationMessage, setApplicationMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));

    const savedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(savedJobs);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      fetch("http://localhost:5000/api/jobs")
        .then((response) => response.json())
        .then((data) => setJobs(data))
        .catch((error) => console.error("Error fetching jobs:", error));
    } else {
      const filteredJobs = jobs.filter((job) =>
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
      localStorage.setItem("appliedJobs", JSON.stringify(updatedAppliedJobs));
      setSuccessMessage("Application sent successfully!");
      setSelectedJob(null);
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-900 py-8 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-blue-50 text-blue-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">Search Jobs</h2>

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

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job._id}
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
      </div>
    </div>
  );
};

export default SearchJobs;