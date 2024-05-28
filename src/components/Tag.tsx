import React from "react";
import ITag from "../interfaces/ITag";

const Tag: React.FC<ITag> = ({ text, isAbsolute }) => {
  return (
    <div
      className={
        (isAbsolute && "absolute top-2 right-2 ") +
        "py-2 px-3 text-xs lg:text-base rounded text-white bg-primary font-semibold max-w-max flex items-center"
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Tag;
