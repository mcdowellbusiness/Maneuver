import React from "react";

import { otherPage } from "@/assets";

const OtherPageContinueDownBackground = () => {
  return (
    <div>
      <img
        src={otherPage}
        alt="page background"
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 top-[1145px] bg-[url('/images/otherPagesContinueDown.jpg')] bg-cover w-full bg-repeat-y z-[-2]"></div>
    </div>
  );
};

export default OtherPageContinueDownBackground;
