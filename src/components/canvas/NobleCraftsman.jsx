import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const NobleCraftsman = ({}) => {
  const nobleCraftsman = useGLTF("./the_noble_craftsman/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={nobleCraftsman.scene}
        scale={0.05}
        position={[0, -2, -0.5]}
      />
    </mesh>
  );
};

const NobleCraftsmanCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <NobleCraftsman />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default NobleCraftsmanCanvas;
