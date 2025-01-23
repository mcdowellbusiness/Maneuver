import React from "react";

import { otherPage, otherPageContinueDown } from "@/assets";

const OtherPageBackground = () => {
  return (
    <div className="w-full min-h-full overflow-hidden z-[-1]">
      <img src={otherPage} alt="page background" className="absolute z-10" />
      <div className="absolute inset-0 bg-[url('/images/otherPagesContinueDown.jpg')] bg-cover bg-repeat-y"></div>
    </div>
  );
};

export default OtherPageBackground;
