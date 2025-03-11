import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function ThreeScene() {
	return (
		<div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border border-blue-200 bg-white flex items-center justify-center">
			<Canvas gl={{ alpha: true }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<OrbitControls enablePan={false} enableZoom={false} />

				{/* Slightly Bigger Rotating Torus Knot */}
				<mesh rotation={[0.5, 0.5, 0]}>
					<torusKnotGeometry args={[1.2, 0.35, 128, 32]} />  {/* Increased size here */}
					<meshStandardMaterial 
						color="#1E90FF" 
						metalness={0.7} 
						roughness={0.2} 
					/>
				</mesh>
			</Canvas>
		</div>
	);
}

export default ThreeScene;
