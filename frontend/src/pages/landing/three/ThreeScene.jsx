import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function ThreeScene() {
	return (
		<div style={{ width: '100%', height: '400px' }}>
			<Canvas>
				{/* Basic camera controls */}
				<OrbitControls />
				{/* Add your 3D objects/lights here */}
			</Canvas>
		</div>
	);
}

export default ThreeScene;

