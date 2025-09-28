import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Edges } from '@react-three/drei';
import * as THREE from 'three';

// --- A simple pseudo-random generator for deterministic layouts ---
const createSeededRandom = (seed) => {
    let state = seed % 2147483647;
    if (state <= 0) state += 2147483646;
    return () => {
        state = (state * 16807) % 2147483647;
        return (state - 1) / 2147483646;
    };
};

// --- A single Hexagonal Prism sub-component ---
const HexagonalPrism = ({ position, isHighlighted = false, glareType = 'none', label }) => {
    const prismHeight = 0.5;

    const glareProps = {
        none: { emissiveIntensity: 0, edgeColor: '#555' },
        subtle: { emissiveIntensity: 0.1, edgeColor: '#F58B33' },
        medium: { emissiveIntensity: 0.2, edgeColor: '#F58B33' },
        main: { emissiveIntensity: 0.3, edgeColor: '#F58B33' }
    };
    const currentGlare = glareProps[glareType] || glareProps.none;

    return (
        <group position={position}>
            <mesh position={[0, prismHeight / 2, 0]}>
                <cylinderGeometry args={[0.5, 0.5, prismHeight, 6]} />
                <meshStandardMaterial
                    color={isHighlighted ? "#F58B33" : "#1a2233"}
                    metalness={0.9}
                    roughness={0.4}
                    emissive={isHighlighted ? "#F58B33" : (glareType !== 'none' ? '#ffffff' : '#000000')}
                    emissiveIntensity={isHighlighted ? 0.8 : currentGlare.emissiveIntensity}
                    toneMapped={false}
                />
                <Edges scale={1} threshold={15} color={currentGlare.edgeColor} />
            </mesh>
            {isHighlighted && (
                <pointLight color="#F58B33" intensity={60} distance={5} position={[0, prismHeight, 0]} />
            )}
            {label && (
                 <Text
                    position={[0, prismHeight + 0.01, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    fontSize={0.3}
                    color="#E5E7EB"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
            )}
        </group>
    );
};

// --- The Main 3D Scene Component ---
const SciFiHexGrid = ({ scrollProgress, mainHexagons, stableFillerHexagons }) => {
    const groupRef = useRef();
    const tiltAngle = 50 * (Math.PI / 180);

    return (
        <group ref={groupRef} position={[0, -1.2, 0]} rotation={[tiltAngle, 0, 0]}>
            {mainHexagons.map((hex, index) => (
                <HexagonalPrism
                    key={hex.key}
                    position={hex.position}
                    isHighlighted={Math.round(scrollProgress.get() * (mainHexagons.length - 1)) === index}
                    glareType={hex.glareType}
                    label={hex.label}
                />
            ))}
            {stableFillerHexagons.map((hex) => (
                 <HexagonalPrism
                    key={hex.key}
                    position={hex.position}
                    glareType={hex.glareType}
                />
            ))}
        </group>
    );
};

export const BackgroundModel = ({ scrollProgress }) => {
    const { mainHexagons, stableFillerHexagons } = useMemo(() => {
        // Updated labels to remove "JOIN"
        const labels = ["MIC", "ABOUT", "PROGRAMS", "PORTFOLIO", "EVENTS", "NEWS", "FOOTER"];
        const zSpacing = 4.0;
        const mainHexs = labels.map((label, index) => ({
            key: `main-${index}`,
            position: new THREE.Vector3(index % 2 === 0 ? -2.5 : 2.5, 0, -index * zSpacing),
            label,
            glareType: 'main',
        }));
        
        const seededRandom = createSeededRandom(1);
        const fillers = [];
        const mainPositions = new Set(mainHexs.map(h => `${h.position.x},${h.position.z}`));
        const radius = 6;
        const zDepth = mainHexs.length * 4.5;

        for (let i = -radius; i <= radius; i++) {
            for (let j = 1; j >= -zDepth; j--) {
                const x = i * 1.25 + (j % 2 !== 0 ? 1.25 / 2 : 0);
                const z = j * 1.08;
                if (!mainPositions.has(`${x},${z}`)) {
                    fillers.push({ key: `filler-${i}-${j}`, position: new THREE.Vector3(x, 0, z) });
                }
            }
        }

        fillers.sort(() => seededRandom() - 0.5);
        const subtleCount = Math.floor(fillers.length * 0.1);
        const mediumCount = Math.floor(fillers.length * 0.1);
        
        const styledFillers = fillers.map((hex, i) => {
            if (i < subtleCount) return { ...hex, glareType: 'subtle' };
            if (i < subtleCount + mediumCount) return { ...hex, glareType: 'medium' };
            return { ...hex, glareType: 'none' };
        });

        return { mainHexagons: mainHexs, stableFillerHexagons: styledFillers };
    }, []);

    return (
        <Canvas gl={{ alpha: true }} camera={{ position: [0, 8, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Suspense fallback={null}>
                {mainHexagons.length > 0 && (
                    <SciFiHexGrid 
                        scrollProgress={scrollProgress} 
                        mainHexagons={mainHexagons} 
                        stableFillerHexagons={stableFillerHexagons} 
                    />
                )}
            </Suspense>
        </Canvas>
    );
};

