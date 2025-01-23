import React from "react";
import parse, { domToReact } from "html-react-parser";

const voidElements = [
  "img",
  "br",
  "hr",
  "input",
  "link",
  "meta",
  "area",
  "base",
  "col",
  "command",
  "embed",
  "keygen",
  "param",
  "source",
  "track",
  "wbr",
];

const CustomArticle = ({ htmlContent }) => {
  const tailwindClasses = {
    img: "w-full rounded-md mb-8 shadow-lg",
    p: "mb-6 text-lg text-justify",
    h1: "text-center my-14 font-bold text-4xl",
    h5: "mb-6 mt-14 text-xl font-semibold text-justify",
    center: "mb-12 text-lg",
    video: "w-full rounded-md mb-8 shadow-lg cursor-pointer",
  };

  const options = {
    replace: ({ name, attribs, children }) => {
      if (tailwindClasses[name]) {
        const elementProps = {
          ...attribs,
          className: attribs.class
            ? `${attribs.class} ${tailwindClasses[name]}`
            : tailwindClasses[name],
          ...(name === "video" && { controls: true, key: Date.now() }),
        };

        // Only process children for non-void elements
        if (!voidElements.includes(name)) {
          return React.createElement(
            name,
            elementProps,
            domToReact(children, options)
          );
        } else if (name === "video") {
          return React.createElement(
            name,
            elementProps,
            domToReact(children, options)
          );
        } else {
          return React.createElement(name, elementProps);
        }
      }
    },
  };

  return <div>{parse(htmlContent, options)}</div>;
};

export default CustomArticle;
