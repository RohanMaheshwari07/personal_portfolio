import {
  Html,
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";

const Avatar = () => {
  const [index, setIndex] = useState(1);
  const avatar = useGLTF("./personal_avatar/avatar_4_animations.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    actions[names[index]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[index]]?.fadeOut(0.5);
    };
  }, [index, actions, names]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2.8}
        position={[0, -3.25, -1.5]}
      />
      <Html position={[-5, -0.5, 0]}>
        <button
          className="bg-secondary text-black w-[100px] p-2  rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-110 duration-500"
          onClick={() => {
            setIndex((index + 1) % names.length);
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Check out my moves" : "Impress Me!"}
        </button>
      </Html>
    </group>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -2, 7] }}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.75} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<CanvasLoader />}>
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
