import React, { useState } from "react";
import  {BusinessNavbar}  from "../../components/business/index";
const Applicants = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      skills: "React, Node.js, MongoDB",
      experience: "3 years",
      portfolio: "https://johndoe.dev",
      hourlyRate: "$30/hr",
      certifications: "Certified React Developer",
      experienceDocs: "https://drive.google.com/example",
      location: "New York, USA",
      availability: "Full-time",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      approved: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: "Vue, Laravel, MySQL",
      experience: "5 years",
      portfolio: "https://janesmith.dev",
      hourlyRate: "$40/hr",
      certifications: "Certified Full Stack Developer",
      experienceDocs: "https://drive.google.com/example",
      location: "San Francisco, USA",
      availability: "Part-time",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      approved: false,
    },
  ]);

  const handleApprove = (id) => {
    setApplicants(applicants.map(app => app.id === id ? { ...app, approved: true } : app));
  };

  const handleReject = (id) => {
    setApplicants(applicants.filter(app => app.id !== id));
  };

  return (
    <div className="bg-white min-h-screen p-10">
        <BusinessNavbar />
      <h1 className="text-5xl font-bold text-[#4932FB] mb-6">Applicants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicants.map((app) => (
          <div key={app.id} className="p-6 bg-gray-100 rounded-lg shadow-md border border-[#9C4DF4]">
            <h2 className="text-2xl font-bold text-[#4932FB]">{app.name}</h2>
            <p className="text-lg text-gray-700 mt-2"><strong>Skills:</strong> {app.skills}</p>
            <p className="text-lg text-gray-700"><strong>Experience:</strong> {app.experience}</p>
            <p className="text-lg text-gray-700"><strong>Rate:</strong> {app.hourlyRate}</p>
            <p className="text-lg text-gray-700"><strong>Location:</strong> {app.location}</p>
            <p className="text-lg text-gray-700"><strong>Availability:</strong> {app.availability}</p>

            <div className="mt-3 space-x-2">
              <a href={app.portfolio} target="_blank" className="text-blue-500 hover:underline">Portfolio</a> |
              <a href={app.experienceDocs} target="_blank" className="text-blue-500 hover:underline">Experience Docs</a> |
              <a href={app.github} target="_blank" className="text-blue-500 hover:underline">GitHub</a> |
              <a href={app.linkedin} target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
            </div>

            <div className="mt-4 flex gap-3">
              {!app.approved ? (
                <>
                  <button onClick={() => handleApprove(app.id)} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md transition-all">
                    Approve
                  </button>
                  <button onClick={() => handleReject(app.id)} className="bg-gray-400 hover:bg-gray-600 text-white font-semibold px-5 py-2 rounded-md transition-all">
                    Reject
                  </button>
                </>
              ) : (
                <a
                href={`https://wa.me/?text=Hey%20${encodeURIComponent(app.name)},%20I%20saw%20your%20application.%20Let's%20schedule%20an%20interview%20at%20a%20suitable%20time.`}

                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md transition-all"
                >
                  Contact Freelancer
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicants;