import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/freelancer/dashboardPage';
import Profile from './pages/freelancer/profilePage';
import SearchJobs from './pages/freelancer/jobPage'; // Updated: Import SearchJobs instead of Jobs

const App = () => {
  return (
    <Router>
        <Routes>
          <Route index path="/" element={<Dashboard/>} />
          <Route index path="/freelancer/profile" element={<Profile />} />
          <Route index path="/freelancer/jobs" element={<SearchJobs />} /> 
        </Routes>
    </Router>
  );
};

export default App;
