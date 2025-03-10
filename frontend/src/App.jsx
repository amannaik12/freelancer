import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Landing & Admin Pages
import Landing from './pages/landing/Landing';
import AdminDashboard from './pages/admin/Dashboard';

// Freelancer Pages
import FreelancerDashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/Jobs'; // Updated: Import SearchJobs instead of Jobs
import FreelancerNavbar from './components/freelancer/FreelancerNavbar';

// Business Pages
import BusinessDashboard from './pages/business/Dashboard';
import PostJob from './pages/business/PostJob';
import { Applicants } from './pages/business';

// Layout wrapper for Freelancer pages
function FreelancerLayout() {
  return (
    <div className="bg-gradient-to-b from-[#4A148C] to-[#7B1FA2] min-h-screen text-white">
      <FreelancerNavbar />
      <Outlet />
    </div>
  );
}
>>>>>>> e0f2d05 (Aman Please Integrate)

<<<<<<< HEAD
import Dashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/Jobs'; // Updated: Import SearchJobs instead of Jobs
import FreelancerNavbar from './components/freelancer/FreelancerNavbar';

const App = () => {
=======
// Layout wrapper for Business pages
function BusinessLayout() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Outlet />
    </div>
  );
}

function App() {
>>>>>>> 681edb3 (All codes Included)
  return (
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Freelancer Routes */}
        <Route path="/freelancer" element={<FreelancerLayout />}>
          <Route index element={<FreelancerDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<SearchJobs />} />
        </Route>

        {/* Business Routes */}
        <Route path="/business" element={<BusinessLayout />}>
          {/* Default Business route */}
          <Route index element={<BusinessDashboard />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="postjob" element={<PostJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> e0f2d05 (Aman Please Integrate)
  );
};

export default App;
