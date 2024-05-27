import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import IMovieLayout from "../interfaces/IMovieLayout";
import IMovie from "../interfaces/IMovie";

const MoviesLayouts: React.FC<IMovieLayout> = ({ title, data }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (data) {
      const getMaxMovies = data.slice(0, 4);
      setMovies(getMaxMovies);
    }
  }, []);

  return (
    <div className="px-40 w-full flex flex-col justify-center items-start mb-36">
      <h1 className="text-primary text-4xl capitalize font-semibold mb-6">
        {title}
      </h1>
      <div className="w-full grid grid-cols-4 gap-4">
        {movies?.map((movie, index) => {
          return (
            <Card
              title={movie.title}
              poster_path={movie.poster_path}
              original_language={movie.original_language}
              release_date={movie.release_date}
              vote_average={`${movie.vote_average
                .toString()
                .substring(0, 3)}/10`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviesLayouts;
