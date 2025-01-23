import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { virtualRealityLinks } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";
import CustomArticle from "@/components/CustomArticle";
import "@/styles/article.css";

const Article = () => {
  const navigate = useNavigate();
  const { articleName } = useParams();

  const vrArticle = virtualRealityLinks[articleName];
  const vrLinks = Object.values(virtualRealityLinks);

  useEffect(() => {
    if (!vrArticle) navigate("/virtual-reality");
  }, [vrArticle]);

  return (
    <SectionWrapper headingText={vrArticle?.title}>
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="Virtual Reality" data={vrLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <CustomArticle htmlContent={vrArticle?.content || ""} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Article;
