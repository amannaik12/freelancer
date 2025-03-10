import React from 'react';
import Navbar from '../../components/common/Navbar';
import HeroSection from './HeroSection';

function Landing() {
	return (
		<div className="relative">
			<Navbar />
			<HeroSection />
			{/* Additional sections or footer can be added here */}
		</div>
	);
}

export default Landing;