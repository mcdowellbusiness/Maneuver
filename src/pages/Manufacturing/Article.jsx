import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { manufacturingLinks } from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";
import CustomArticle from "@/components/CustomArticle";
import "@/styles/article.css";

const Article = () => {
  const navigate = useNavigate();
  const { articleName } = useParams();

  const manufactArticle = manufacturingLinks[articleName];
  const manufactLinks = Object.values(manufacturingLinks);

  useEffect(() => {
    if (!manufactArticle) navigate("/manufacturing");
  }, [manufactArticle]);

  return (
    <SectionWrapper headingText={manufactArticle?.title}>
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="Manufacturing" data={manufactLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <CustomArticle htmlContent={manufactArticle?.content || ""} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Article;
