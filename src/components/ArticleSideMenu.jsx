import React from "react";
import { Link } from "react-router-dom";

const ArticleSideMenu = (props) => {
  const { title, data } = props;

  return (
    <div className="py-8 px-6 h-max">
      <div className="flex justify-between items-center">
        <div className="flex-1 border-t border-tertiary"></div>
        <h6 className="mx-4 text-xl uppercase font-bold">{title}</h6>
        <div className="flex-1 border-t border-tertiary"></div>
      </div>
      <div className="text-[15px] text-gray-400 mt-4">
        {data.map((item) => (
          <Link key={item.title} to={item.url}>
            <div className="border-b border-primary py-2 hover:underline text-lg">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleSideMenu;
