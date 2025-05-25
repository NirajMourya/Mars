import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import { useControls } from 'leva';

// Texture imports (ensure these are in your /src/assets folder)
import colorMap from '../assets/mars.jpg';

export default function MarsModel() {
  const marsRef = useRef();

  // Load textures
  const [color,] = useLoader(TextureLoader, [
    colorMap,
  ]);

  // GUI Controls via Leva
  const { rotationSpeed } = useControls({
    rotationSpeed: { value: 0.001, min: 0, max: 0.01, step: 0.001 }
  });

  // Mars rotation
  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />

      {/* Starfield background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Mars Sphere */}
      <mesh ref={marsRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={color}
        />
      </mesh>

      {/* Controls */}
      <OrbitControls enableZoom={true} />
    </>
  );
}
