import React from "react";

import OtherPageContinueDownBackground from "@/atoms/background/OtherPageContinueDown";

function SectionWrapper({ children, ...props }) {
  const { headingText } = props;

  return (
    <div className="text-tertiary pt-[9.5%] xl:pt-[10%] pb-24 relative z-0">
      <OtherPageContinueDownBackground />
      {headingText && (
        <h1 className="text-md sm:text-xl md:text-2xl lg:text-4xl font-bold ml-auto w-3/5 py-4 pl-12 text-heading bg-light-gray rounded-l-full">
          {headingText}
        </h1>
      )}
      {children}
    </div>
  );
}

export default SectionWrapper;
