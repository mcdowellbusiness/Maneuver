import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { moocVideosLinks } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";
import CustomArticle from "@/components/CustomArticle";
import "@/styles/article.css";

const Article = () => {
  const navigate = useNavigate();
  const { articleName } = useParams();

  const moocLinks = moocVideosLinks[articleName];
  const manufactLinks = Object.values(moocVideosLinks);

  useEffect(() => {
    if (!moocLinks) navigate("/mooc-videos");
  }, [moocLinks]);

  return (
    <SectionWrapper headingText={moocLinks?.title}>
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="mooc videos" data={manufactLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <CustomArticle htmlContent={moocLinks?.content || ""} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Article;
