import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/Jobs'; // Updated: Import SearchJobs instead of Jobs
import FreelancerNavbar from './components/freelancer/FreelancerNavbar';

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#4A148C] to-[#7B1FA2] min-h-screen text-white">
        <FreelancerNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/freelancer/profile" element={<Profile />} />
          <Route path="/freelancer/jobs" element={<SearchJobs />} /> {/* Updated route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
