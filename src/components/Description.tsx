import React from "react";
import IDescription from "../interfaces/IDescription";

const Description: React.FC<IDescription> = ({ text, isMax }) => {
  return (
    <div
      className={
        (isMax && "max-w-md ") + "text-xl font-semibold text-white mb-4"
      }
    >
      {text}
    </div>
  );
};

export default Description;
