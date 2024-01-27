"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const CoffeCupModel: React.FC = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 20,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      style={{ height: "375px", width: "100%" }}
    >
      <CoffeeCup />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export const CoffeeCup: React.FC = () => {
  const coffeeCupMesh = useLoader(GLTFLoader, "/models/coffee-cup.glb");
  const modelRef = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta / 2;
      modelRef.current.rotation.z = 0.5;
    }
  });

  return (
    <mesh
      ref={modelRef}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <ambientLight color={"white"} intensity={0.2} />
      <pointLight
        position={[-10, -10, -10]}
        intensity={hovered ? 4000 : 2500}
      />
      <pointLight position={[10, 10, 10]} intensity={hovered ? 4000 : 2500} />
      <primitive object={coffeeCupMesh.scene} ref={modelRef} />
    </mesh>
  );
};
