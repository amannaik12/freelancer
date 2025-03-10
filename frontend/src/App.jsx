import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/Dashboard';
import Landing from './pages/landing/Landing';
import FreelancerDashboard from './pages/freelancer/Dashboard';
import Profile from './pages/freelancer/Profile';
import SearchJobs from './pages/freelancer/SearchJobs';
import BusinessDashboard from './pages/business/Dashboard';
import Applicants from './pages/business/Applicants';
import PostJob from './pages/business/PostJob';
import FreelancerLayout from './layouts/FreelancerLayout';
import BusinessLayout from './layouts/BusinessLayout';


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
  );
}

export default App;