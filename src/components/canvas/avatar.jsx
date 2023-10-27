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

const Avatar = ({ isMobile }) => {
  const [index, setIndex] = useState(isMobile ? 1 : 0);
  const avatar = useGLTF("./personal_avatar/avatar_4_animations.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [newNames, setNewNames] = useState(names);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    actions[newNames[index]]?.reset().fadeIn(0.5).play();
    if (isMobile) {
      setNewNames(newNames.filter((item) => item !== "point"));
    } else {
      setNewNames(names);
    }

    return () => {
      actions[newNames[index]]?.fadeOut(0.5);
    };
  }, [isMobile, index, actions]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2.8}
        position={[0, -3.25, -1.5]}
      />
      <Html position={isMobile ? [-0.5, -3.5, 0] : [-5, -0.5, 0]}>
        <button
          className="bg-[#915EFF] text-white w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-[#fd01fb] hover:scale-110 duration-500"
          onClick={() => {
            setIndex((index + 1) % newNames.length);
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -2, 7] }}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.75} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<CanvasLoader />}>
        <Avatar isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
