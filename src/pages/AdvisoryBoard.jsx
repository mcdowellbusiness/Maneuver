import React from "react";

import { advisoryBoard } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import SectionButtons from "@/molecules/SectionButtons";

const btns = [
  { title: "Team", url: "/team" },
  { title: "Advisory Board", url: "/advisory-board" },
];

const AdvisoryBoard = () => {
  return (
    <SectionWrapper>
      <SectionButtons items={btns} />

      <div className="mt-20 flex justify-between flex-wrap w-3/4 mx-auto">
        {advisoryBoard.map((person) => (
          <div key={person.name} className="flex w-[43%] space-x-6 mr-16 mb-14">
            <img
              src={person.image}
              alt={person.name}
              className="rounded-lg w-[96px] h-[96px] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-1">{person.name}</h2>
              <p className="text-xl mb-3 font-semibold">{person.role}</p>
              <p className="text-base mb-3 font-semibold">
                {person.department}
              </p>
              <p className="text-lg text-justify">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AdvisoryBoard;
