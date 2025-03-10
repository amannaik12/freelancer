import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myGLB from '../../../assets/3d/spaceman.glb';

function HoverTiltModel() {
	const groupRef = useRef();
	const { scene } = useGLTF(myGLB);
	const [hovered, setHovered] = useState(false);

	useFrame((state) => {
		if (!groupRef.current) return;
		const mouseX = state.mouse.x * 0.3;
		const mouseY = state.mouse.y * 0.3;
		const targetX = hovered ? mouseY : 0;
		const targetY = hovered ? mouseX : 0;
		groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.1;
		groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
	});

	return (
		<group
			ref={groupRef}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<primitive object={scene} scale={[1.5, 1.5, 1.5]} />
		</group>
	);
}

function ThreeScene() {
	return (
		<div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
			<Canvas gl={{ alpha: true }}>
				<ambientLight intensity={0.4} />
				<directionalLight position={[5, 5, 5]} intensity={0.8} />
				<OrbitControls enablePan={false} enableZoom={false} />
				<HoverTiltModel />
			</Canvas>
		</div>
	);
}

export default ThreeScene;

