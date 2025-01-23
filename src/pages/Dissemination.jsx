import React from "react";

import SectionWrapper from "@/layout/SectionWrapper";
import { publications } from "@/constants";

const Dissemination = () => {
  return (
    <SectionWrapper headingText="Publications">
      <div className="mt-16 sm:mt-24 w-full sm:w-2/3 mx-auto space-y-16">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="flex items-center flex-col space-y-10 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-20"
          >
            <img
              src={pub.image}
              alt="publication logo"
              className="w-24 md:w-28"
            />
            <div className="w-2/3">
              <h5 className="font-medium text-xl mb-2">{pub.title}</h5>
              <p>{pub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Dissemination;
