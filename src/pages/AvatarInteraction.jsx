import React from "react";
import { AvatarCanvas } from "../components/canvas";

const AvatarInteraction = () => {
  return (
    <section className="bg-[url('/src/assets/herobg.png')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
        {/*  message */}
        <div>
          <h1 className="text-white text-7xl font-extrabold">
            Hi, I'm <span className="text-secondary">thabish</span>
          </h1>
          <p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
            My code is so clean, my keyboard has never needed a shower.
            <br />
            So come on in, explore a little, and let's make some magic together!
          </p>
        </div>
      </div>
      <AvatarCanvas />
    </section>
  );
};

export default AvatarInteraction;
