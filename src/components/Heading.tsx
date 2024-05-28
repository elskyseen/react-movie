import React from "react";
import IText from "../interfaces/IText";

const Heading: React.FC<IText> = ({ text }) => {
  return (
    <div className="text-3xl lg:text-6xl max-w-xl font-semibold text-primary mb-4 capitalize">
      {text}
    </div>
  );
};

export default Heading;
