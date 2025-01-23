import React from "react";

import SectionWrapper from "@/layout/SectionWrapper";
import { outcomes } from "@/constants";

const Outcomes = () => {
  return (
    <SectionWrapper headingText="NSF Award Outcomes">
      <ol className="mt-20 w-2/3 space-y-5 text-base text-justify list-decimal leading-relaxed sm:leading-10 sm:text-lg sm:space-y-2 mx-auto">
        {outcomes.map((outcome) => (
          <li key={outcome.name} className="whitespace-pre-line">
            {outcome.description}
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};

export default Outcomes;
