import React, { useState, useEffect } from 'react';
import { FiEdit, FiSave, FiX, FiUser } from 'react-icons/fi';
import FreelancerNavbar from '../../components/freelancer/dashboardPage/FreelancerNavbar';
import axiosInstance from '../../lib/axios';  // ✅ Corrected import path

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    skills: '',
    experience: '',
    portfolio: '',
    hourlyRate: '',
    certifications: '',
    experienceDocs: '',
    location: '',
    availability: '',
    github: '',
    linkedin: ''
  });

  // ✅ Fetch all profiles on mount and use the first one for now
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get('/freelancer/');
        if (response.data && response.data.length > 0) {
          setProfile(response.data[0]); // Use the first profile for now
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // ✅ Save or update profile data
  const handleSave = async () => {
    try {
      await axiosInstance.post('/freelancer/create', profile);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div>
      <FreelancerNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 mb-20">
        <div className="max-w-4xl w-full bg-white text-black rounded-2xl shadow-lg p-12 border border-gray-300 mb-20">
          <h2 className="text-4xl font-extrabold text-center text-[#1E3A8A] mb-12">Profile</h2>

          <div className="space-y-8">
            {Object.entries(profile).map(([key, value]) => (
              <div key={key} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-6">
                <div className="flex items-center mb-10 md:mb-0 text-[#1E3A8A] font-semibold space-x-2">
                  <FiUser className="text-xl" />
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name={key}
                    value={value || ''}
                    onChange={handleChange}
                    className="w-full md:w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-shadow shadow-sm text-gray-800"
                  />
                ) : (
                  <span className="text-right text-gray-700 w-full md:w-2/3 break-words font-medium">
                    {key.includes('http') ? (
                      <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline hover:text-blue-600 transition">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="bg-[#1E3A8A] text-white py-2 px-8 rounded-lg hover:bg-[#3B82F6] transition transform hover:scale-105 flex items-center space-x-2 shadow-md">
                  <FiSave />
                  <span>Save</span>
                </button>
                <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white py-2 px-8 rounded-lg hover:bg-gray-500 transition transform hover:scale-105 flex items-center space-x-2 shadow-md">
                  <FiX />
                  <span>Cancel</span>
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="bg-[#1E3A8A] text-white py-2 px-8 rounded-lg hover:bg-[#3B82F6] transition transform hover:scale-105 flex items-center space-x-2 shadow-md">
                <FiEdit />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
