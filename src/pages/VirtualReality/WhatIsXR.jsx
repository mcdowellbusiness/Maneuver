import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { virtualRealityLinks } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";
import "@/styles/article.css";
import WhatIsXR from "@/components/WhatIsXR";
import StarsCanvas from "@/components/canvas/Stars";

const XRPage = () => {
  const vrLinks = Object.values(virtualRealityLinks);

  return (
    <SectionWrapper headingText="What is XR?">
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="Virtual Reality" data={vrLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <WhatIsXR />
        </div>
      </div>
      <StarsCanvas />
    </SectionWrapper>
  );
};

export default XRPage;
