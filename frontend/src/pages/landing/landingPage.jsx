import React from 'react';
import Navbar from '../../components/common/Navbar';
import ThreeScene from './three/ThreeScene';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
	const navigate = useNavigate();

	// Handle navigation to Login page
	const handleLogin = () => {
		navigate('/login');
	};

	// Handle navigation to Signup page
	const handleSignup = () => {
		navigate('/signup');
	};

	return (
		<div>
			<Navbar />
			<div>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen flex items-center">
					<div className="container mx-auto px-10 py-24 flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0">

						{/* Text Content */}
						<div className="md:w-1/2 space-y-8">
							<h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
								Unlock Your Potential with .MINDLANCER
							</h1>
							<p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
								Join a community of exceptional talent and forward-thinking businesses. 
								Discover opportunities that align with your skills and ambitions.
							</p>
							<div className="flex space-x-6">
								<button
									className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-xl transition transform hover:scale-105"
									onClick={handleLogin}
								>
									Login
								</button>
								<button
									className="bg-white text-blue-600 px-8 py-3 rounded-xl shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
									onClick={handleSignup}
								>
									Signup
								</button>
							</div>
						</div>

						{/* 3D Model Section */}
						<div className="md:w-1/2 flex justify-center">
							<div className="bg-white border border-blue-200 rounded-2xl shadow-2xl p-8 w-full max-w-xl transform hover:scale-105 transition">
								<ThreeScene />
							</div>
						</div>

					</div>
				</section>

				{/* About Section */}
				<section className="bg-white py-20">
					<div className="container mx-auto px-10 text-center space-y-8">
						<h2 className="text-4xl font-bold text-blue-700">
							About .MINDLANCER
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
							.MINDLANCER is a dynamic platform that bridges the gap between top talent and exceptional opportunities.
							Whether you’re a freelancer seeking your next project or a business looking to hire experts, 
							we offer a seamless way to connect and collaborate. Our mission is to empower professionals and businesses alike,
							fostering growth and innovation in the gig economy.
						</p>
						<div className="flex justify-center space-x-6">
							<button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-xl shadow-lg transition transform hover:scale-105">
								Learn More
							</button>
							<button className="border border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white shadow-lg transition transform hover:scale-105">
								Contact Us
							</button>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-blue-800 text-white py-6 text-center">
					<p className="text-sm">&copy; 2025 .MINDLANCER. All Rights Reserved.</p>
				</footer>
			</div>
		</div>
	);
}

export default LandingPage;
