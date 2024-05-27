import React from "react";
import ITag from "../interfaces/ITag";

const Tag: React.FC<ITag> = ({ text, isAbsolute }) => {
  return (
    <div
      className={
        (isAbsolute && "absolute top-2 right-2 ") +
        "py-1 px-3 rounded text-white bg-primary font-semibold"
      }
    >
      {text}
    </div>
  );
};

export default Tag;
