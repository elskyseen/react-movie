import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDetailMovie } from "../apis/api";
import Tag from "../components/Tag";
import Heading from "../components/Heading";
import Description from "../components/Description";
import Loading from "../components/Loading";
import { baseImage } from "../variable";
import Button from "../components/Button";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["detailMovie"],
    queryFn: () => getDetailMovie(id || "1"),
  });

  return (
    <div className="w-full min-h-dvh grid grid-cols-1 lg:grid-cols-12 py-10 px-4 lg:px-40 justify-center items-center gap-10">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="col-span-1 lg:col-span-5">
            <img
              src={`${baseImage}${data.poster_path}`}
              alt="movie-image"
              className="w-full"
            />
          </div>
          <div className="col-span-1 lg:col-span-7 text-white flex flex-col gap-2">
            <div className="flex gap-4">
              {data?.genres.map((genre: { name: string }, index: number) => {
                return <Tag isAbsolute={false} text={genre.name} key={index} />;
              })}
            </div>
            <Heading text={data.title} />
            <Description text={data.overview} />
            <div className="flex gap-4">
              <p className="capitalize">language :</p>
              <Tag isAbsolute={false} text={data.original_language} />
            </div>
            <div className="flex gap-4">
              <p className="capitalize">release :</p>
              <p>{data.release_date}</p>
            </div>
            <div className="flex gap-4">
              <p className="capitalize">rate :</p>
              <Tag
                text={`${data?.vote_average.toString().substring(0, 3)}/10`}
                isAbsolute={false}
              />
            </div>
            <div className="flex gap-2">
              <p className="capitalize">companies:</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {data?.production_companies.map(
                  (companie: { name: string }, index: number) => {
                    return (
                      <div className="col-span-1" key={index}>
                        <Tag isAbsolute={false} text={companie.name} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <p className="capitalize">vote :</p>
              <Tag text={data.vote_count} isAbsolute={false} />
            </div>
            <Button link={`/`} text="back to home" />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
