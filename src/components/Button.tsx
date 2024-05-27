import React from "react";
import IText from "../interfaces/IText";

const Button: React.FC<IText> = ({ text }) => {
  return <button className="py-2 px-4 bg-primary capitalize text-white text-xl rounded">{text}</button>;
};

export default Button;
