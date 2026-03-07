import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Cubie({ position }: { position: [number, number, number] }) {
  const [x, y, z] = position;
  
  // Define colors for a real Rubik's Cube look
  // Order in Three.js BoxGeometry materials: [x+, x-, y+, y-, z+, z-]
  const materials = useMemo(() => {
    const colors = [
      x === 1.1 ? "#FF00FF" : "#050505", // Right: Magenta
      x === -1.1 ? "#D3D3D3" : "#050505", // Left: Light Grey
      y === 1.1 ? "#FF69B4" : "#050505", // Top: Pink
      y === -1.1 ? "#333333" : "#050505", // Bottom: Dark Grey
      z === 1.1 ? "#FFFFFF" : "#050505", // Front: White
      z === -1.1 ? "#808080" : "#050505", // Back: Grey
    ];

    return colors.map(color => 
      new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.5,
        roughness: 0.2,
      })
    );
  }, [x, y, z]);

  return (
    <mesh position={position} material={materials}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

function CubeGroup() {
  const groupRef = useRef<THREE.Group>(null);
  
  const cubies = useMemo(() => {
    const result = [];
    const spacing = 1.1; // 1 (size) + 0.1 (gap)
    
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Skip the very center
          if (x === 0 && y === 0 && z === 0) continue;
          
          result.push({
            position: [x * spacing, y * spacing, z * spacing] as [number, number, number]
          });
        }
      }
    }
    return result;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Very subtle idle rotation
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {cubies.map((cubie, i) => (
        <Cubie key={i} position={cubie.position} />
      ))}
    </group>
  );
}

export default function RubiksCube() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[5, 5, 10]} fov={40} />
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          rotateSpeed={0.5}
          minDistance={5}
          maxDistance={20}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <CubeGroup />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
