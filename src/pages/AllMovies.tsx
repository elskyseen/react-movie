import { useParams } from "react-router-dom";
import { getPlayingMovies, getPopular, getTopRated } from "../apis/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Card from "../components/Card";
import ICard from "../interfaces/ICard";

const AllMovies = () => {
  const { categorie } = useParams();

  const getTypeMovies = () => {
    switch (categorie) {
      case "now_playing":
        return getPlayingMovies();
      case "popular":
        return getPopular();
      case "top_rated":
        return getTopRated();
      default:
        return () => Promise.reject("Invalid category");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: getTypeMovies,
  });

  return (
    <div className="w-full flex flex-col justify-center px-20">
      <h1 className="my-20 text-center text-primary text-7xl font-semibold">
        All Movies
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data?.map((movie: ICard, index: number) => {
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
      )}
    </div>
  );
};

export default AllMovies;
