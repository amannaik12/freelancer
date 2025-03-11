import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/Dashboard';
import Landing from './pages/landing/landingPage';
import Dashboard from './pages/freelancer/dashboardPage';
import Profile from './pages/freelancer/profilePage';
import SearchJobs from './pages/freelancer/jobPage';
import BusinessDashboard from './pages/business/Dashboard';
import Applicants from './pages/business/Applicants';
import PostJob from './pages/business/PostJob';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Freelancer Routes */}
        <Route path="/freelancer">
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<SearchJobs />} />
        </Route>

        {/* Business Routes */}
        <Route path="/business">
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
