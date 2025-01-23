import React from "react";
import SectionWrapper from "@/layout/SectionWrapper";
import { activities } from "@/constants";

// Import workshop images
import img1146 from "@/assets/images/IMG_1146.JPG";
import img1131 from "@/assets/images/IMG_1131.JPG";
import img1200 from "@/assets/images/IMG_1200.JPG";
import img1163 from "@/assets/images/IMG_1163.JPG";

const Activities = () => {
  return (
    <SectionWrapper headingText="Activities">
      {/* Video section */}
      <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
        <video controls className="w-full">
          <source src="/videos/VR_Workshop1a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Workshop images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-6xl mx-auto px-4">
        <img src={img1146} alt="Workshop 1" className="w-full rounded-lg shadow-lg" />
        <img src={img1131} alt="Workshop 2" className="w-full rounded-lg shadow-lg" />
        <img src={img1200} alt="Workshop 3" className="w-full rounded-lg shadow-lg" />
        <img src={img1163} alt="Workshop 4" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Activities list */}
      <ol className="mt-20 w-2/3 space-y-5 text-base text-justify list-disc leading-relaxed sm:leading-10 sm:text-lg sm:space-y-2 mx-auto">
        {activities.map((outcome) => (
          <li key={outcome.name} className="whitespace-pre-line">
            {outcome.description}
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};

export default Activities;
