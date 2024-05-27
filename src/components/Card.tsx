import React from "react";
import Button from "./Button";
import Tag from "./Tag";
import ICard from "../interfaces/ICard";
import { baseImage } from "../variable";

const Card: React.FC<ICard> = ({
  poster_path,
  title,
  release_date,
  vote_average,
  original_language,
}) => {
  return (
    <div className="col-span-1 flex flex-col justify-between p-4 rounded border-2 border-primary">
      <div className="flex flex-col">
        <div className="relative w-full">
          <img src={`${baseImage}${poster_path}`} alt="movie-image" />
          <Tag text={original_language} isAbsolute={true} />
        </div>
        <h1 className="text-xl text-primary capitalize font-semibold mb-2">
          {title}
        </h1>
        <div className="flex gap-2 mb-4">
          <p className="text-white font-semibold text-sm">{release_date}</p>
          <Tag text={vote_average} isAbsolute={false} />
        </div>
      </div>
      <Button text="view detail" />
    </div>
  );
};

export default Card;
