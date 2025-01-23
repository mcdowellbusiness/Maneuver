import React from "react";

import Laptop from "../Laptop";
import { logoTitle } from "@/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-center h-scree z-10">
      <div className="px-14">
        <img
          className="pt-[3rem] w-3/5 ml-auto mr-[7.3rem]"
          src={logoTitle}
          alt="manuever manufacturing education using virtual environment resources"
        />

        <div className="flex justify-between items-center mx-auto mt-40">
          <div className="w-full">
            <p className="text-left text-lg text-tertiary">
              Project MANEUVER (Manufacturing Education Using Virtual
              Environment Resources) is developing an affordable virtual reality
              (VR) framework to address the imminent demand for well-trained
              digital manufacturing (DM) technicians. Over half of the 3.5
              million required manufacturing positions in the US are expected to
              go unfilled due to a "skills gap". Employment projections show a
              decline in conventional manufacturing jobs with marked growth in
              DM jobs. This VR instructional framework, targeted at two and four
              year programs, will not only advance the field of DM, but will
              also strengthen education by remedying the lack of clearly defined
              career/educational pathway(s) for entry-level DM technicians.
            </p>
            <div className="flex justify-center space-x-5 mt-20">
              <Link to="/mooc-videos">
                <button className="bg-tertiary text-secondary px-8 py-4 rounded font-semibold text-sm">
                  MOOC Videos
                </button>
              </Link>
              <Link to="/vr/content-types">
                <button className="bg-fourth text-secondary px-8 py-4 rounded font-semibold text-sm">
                  Types of VR
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Laptop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
