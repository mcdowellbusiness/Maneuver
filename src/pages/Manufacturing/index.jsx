import React from "react";
import { Link } from "react-router-dom";

import { manufacturingLinks } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";

const Manufacturing = () => {
  const manfactLinks = Object.values(manufacturingLinks);

  return (
    <SectionWrapper headingText="Manufacturing">
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="Manufacturing" data={manfactLinks} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 col-span-1 md:col-span-3 lg:col-span-2">
          {manfactLinks.map((item, index) => (
            <Link key={`${item.title}_${index}`} to={item.url}>
              <div className="col-span-1 rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded"
                />
                <div className="p-4">
                  <h5 className="font-semibold text-xl hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h5>
                  <p className="text-[15px] mt-3 line-clamp">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Manufacturing;
