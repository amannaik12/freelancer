import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Landing & Admin Pages
import Landing from './pages/landing/Landing';
import AdminDashboard from './pages/admin/Dashboard';

// Freelancer Pages
import FreelancerDashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/Jobs'; // Updated: Import SearchJobs instead of Jobs
import FreelancerNavbar from './components/freelancer/FreelancerNavbar';

// Layout wrapper for Freelancer pages
function FreelancerLayout() {
  return (
    <div className="bg-gradient-to-b from-[#4A148C] to-[#7B1FA2] min-h-screen text-white">
      <FreelancerNavbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Freelancer Routes */}
        <Route path="/freelancer" element={<FreelancerLayout />}>
          {/* When you go to /freelancer, show the freelancer dashboard */}
          <Route index element={<FreelancerDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<SearchJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

