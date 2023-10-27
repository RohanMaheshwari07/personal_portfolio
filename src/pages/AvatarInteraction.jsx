import React from "react";
import { AvatarCanvas } from "../components/canvas";
import { styles } from "../styles";

const AvatarInteraction = () => {
  return (
    <section className="bg-[url('/src/assets/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Virtu-Ro</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Looking for some virtual fun? Click on my 3D avatar and let the
            interactive adventure begin. 🌟
          </p>
        </div>
      </div>
      <AvatarCanvas />
    </section>
  );
};

export default AvatarInteraction;
