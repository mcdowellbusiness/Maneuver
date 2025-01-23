import React from "react";

import { hero } from "@/assets";

const HomePageBackground = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <img src={hero} alt="landing hero image" />
    </div>
  );
};

export default HomePageBackground;
