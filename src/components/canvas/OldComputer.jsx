import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const OldComputer = ({}) => {
  const mercatorMap = useGLTF("./old_computer_animation/scene.gltf");
  return (
    <mesh>
      <primitive
        object={mercatorMap.scene}
        scale={1.5}
        position={[0, -2, -0.5]}
      />
    </mesh>
  );
};

const OldComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <OldComputer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default OldComputerCanvas;
