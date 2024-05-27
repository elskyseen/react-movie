import React from "react";
import { Link } from "react-router-dom";
import IButton from "../interfaces/IButton";

const Button: React.FC<IButton> = ({ text,link }) => {
  return (
    <Link
      to={link}
      className="py-2 px-4 bg-primary capitalize text-white text-xl rounded text-center"
    >
      {text}
    </Link>
  );
};

export default Button;
