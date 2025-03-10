import React from 'react';
import ThreeScene from './three/ThreeScene';

function HeroSection() {
	return (
		<section className="relative bg-gradient-to-br from-purple-600 to-indigo-600 min-h-screen flex items-center">
			<div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
				{/* Text Content */}
				<div className="md:w-1/2 text-white space-y-6">
					<h1 className="text-5xl font-extrabold">Discover Exceptional Talent</h1>
					<p className="text-lg">
						Connect with top professionals and build your dream team with ease.
					</p>
					<div className="flex space-x-4">
						<button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded transition">
							Find Talent
						</button>
						<button className="bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-indigo-600 transition">
							Find Work
						</button>
					</div>
				</div>
				{/* 3D Model */}
				<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
					<ThreeScene />
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

