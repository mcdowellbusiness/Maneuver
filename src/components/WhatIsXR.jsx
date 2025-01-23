import React from "react";
import { motion } from "framer-motion";

// import { styles } from "@/styles";
import { XRImages } from "@/constants";
import { fadeIn } from "@/utils/motion";

const WhatIsXR = () => {
  return (
    <>
      <div className="text-white">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Extended Reality.
        </h2>
      </div>

      <div className="flex flex-col-reverse justify-between lg:flex-row lg:space-x-28">
        <p className="text-[17px] leading-[30px]">
          XR is an umbrella term that represents Augmented Reality (AR), Virtual
          Reality (VR), Mixed Reality (MR), Desktop VR, and other potential
          virtual technologies that may not be mentioned here.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {XRImages.map((item, index) => (
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            whileHover={{
              scale: 1.05,
            }}
            className="relative col-span-1"
          >
            <p className="top-4 absolute left-1/2 -translate-x-1/2 text-xl">
              {item.title}
            </p>
            <img
              className="rounded-xl object-cover"
              src={item.image}
              alt={item.title}
            />
          </motion.div>
        ))}
      </div>

      <p className="mt-14 text-[17px] leading-[30px]">
        VR is generally used to refer to an immersive environment, wherein the
        idea is to make the users feel like they are in a different environment
        (the simulated one). Commonly, a headset (aka- head-mounted display or
        HMD) or headset) is to used to experience this immersive world, which is
        a computer-generated virtual environment. Just like we use keyboard and
        mouse to interact with our PC, we can use hand-held controllers (aka
        controllers) to navigate within this 3D world and select/interact with
        the 3D object therein.
      </p>
    </>
  );
};

export default WhatIsXR;
