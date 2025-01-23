import React from "react";
import { Link } from "react-router-dom";

const SectionButtons = (props) => {
  const { items } = props;

  return (
    <div className="flex mx-auto px-7 md:w-1/2 space-x-10 md:space-x-24 text-center">
      {items.map((i) => (
        <Link
          key={i.title}
          className="text-md sm:text-xl md:text-2xl lg:text-4xl font-bold py-4 text-heading bg-light-gray rounded-full w-full"
          to={i.url}
        >
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default SectionButtons;
