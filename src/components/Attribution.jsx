import React from "react";

const Attribution = (props) => {
  const { items } = props;

  if (!items?.length) return null;

  return (
    <div className="mt-20 text-sm">
      <h6 className="text-white font-black text-[24px]">Acknowledgement</h6>
      <p className="mt-4">Assets from:</p>
      <ul className="list-disc mt-2 ml-3 leading-6">
        {items?.map((i) =>
          i.type === "html" ? (
            <li key={i} dangerouslySetInnerHTML={{ __html: i.data }}></li>
          ) : (
            <li key={i}>{i.data}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Attribution;
