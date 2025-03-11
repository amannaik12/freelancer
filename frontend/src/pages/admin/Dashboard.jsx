import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import AdminDashboardCard from "../../components/admin/AdminDashboardCard";

function Dashboard() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<AdminDashboardCard />} />
			</Routes>
		</Router>
	);
}

export default Dashboard;