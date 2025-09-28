import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// This is a custom, high-performance starfield component
const Starfield = () => {
    const pointsRef = useRef();

    // Generate star positions only once
    const starGeometry = useMemo(() => {
        const positions = [];
        const count = 5000;
        const radius = 200;

        for (let i = 0; i < count; i++) {
            // Distribute points within a sphere
            const r = radius * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            
            positions.push(x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        return geometry;
    }, []);

    useFrame((state, delta) => {
        // Subtle rotation for a dynamic feel
        if (pointsRef.current) {
            pointsRef.current.rotation.x += delta * 0.01;
            pointsRef.current.rotation.y += delta * 0.02;
        }
    });

    return (
        <points ref={pointsRef} geometry={starGeometry}>
            <pointsMaterial 
                color="#ffffff" 
                size={0.15} // Small star size
                sizeAttenuation={true} 
                transparent={true}
                opacity={0.7}
            />
        </points>
    );
};


export const SpaceBackground = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={0.1} />
            <Starfield />
        </Canvas>
    );
};

