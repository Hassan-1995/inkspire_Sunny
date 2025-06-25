"use client";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

const Cylinder = ({ imageUrl }: { imageUrl: string }) => {
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Cylinder actual height
  const height = 1.75;
  const radius = (0.9 + 0.99) / 2; // average radius from top and bottom
  const angleFraction = 0.9; // portion of cylinder wrapped
  const circumference = 2 * Math.PI * radius * angleFraction;

  useEffect(() => {
    const img = texture.image;
    if (!img) return;

    // Ensure image is fully loaded
    if (!img.complete) {
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const repeatX = circumference / height / aspectRatio;
        texture.repeat.set(repeatX, 1);
        texture.center.set(0, 0);
        texture.rotation = 0;
      };
    } else {
      const aspectRatio = img.width / img.height;
      const repeatX = circumference / height / aspectRatio;
      texture.repeat.set(repeatX, 1);
      texture.center.set(0, 0);
      // texture.rotation = 0;
    }
  }, [texture, circumference, height]);

  return (
    <mesh rotation={[0.33, -1.1, 0]}>
      <cylinderGeometry
        args={[0.9, 0.99, 1.75, 64, 1, true, 0, Math.PI * 2 * 0.9]}
      />
      <meshStandardMaterial
        map={texture}
        side={THREE.FrontSide}
        transparent={true}
      />
    </mesh>
  );
};

const WrapperCanvasMug = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Cylinder imageUrl={imageUrl} />
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default WrapperCanvasMug;
