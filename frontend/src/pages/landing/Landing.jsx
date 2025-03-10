import React from 'react';
import HeroSection from './HeroSection';
import ThreeScene from './three/ThreeScene';

function Landing() {
	return (
		<div>
			<h1 className="text-2xl font-bold">Landing Page</h1>
			<HeroSection />
			<ThreeScene />
		</div>
	);
}

export default Landing;

