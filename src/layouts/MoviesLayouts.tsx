import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import IMovieLayout from "../interfaces/IMovieLayout";
import IMovie from "../interfaces/IMovie";
import Button from "../components/Button";

const MoviesLayouts: React.FC<IMovieLayout> = ({ title, data, categorie }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (data) {
      const getMaxMovies = data.slice(0, 4);
      setMovies(getMaxMovies);
    }
  }, []);

  return (
    <div className="px-4 lg:px-40 w-full flex flex-col justify-center items-start mb-36">
      <div className="w-full mb-6 flex justify-between items-center">
        <h1 className="text-primary text-xl lg:text-4xl capitalize font-semibold mb-6">
          {title}
        </h1>
        <Button link={`/movies/${categorie}`} text="view all" />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        {movies?.map((movie, index) => {
          return (
            <Card
              title={movie.title}
              id={movie.id}
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
