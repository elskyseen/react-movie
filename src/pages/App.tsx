import { useQuery } from "@tanstack/react-query";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import { getPlayingMovies, getPopular, getTopRated } from "../apis/api";
import MoviesLayouts from "../layouts/MoviesLayouts";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const App = () => {
  const playMovies = useQuery({
    queryKey: ["playMovies"],
    queryFn: getPlayingMovies,
  });

  const popular = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopular,
  });

  const topMovies = useQuery({
    queryKey: ["topMovies"],
    queryFn: getTopRated,
  });

  const isLoading: boolean =
    playMovies.isLoading || popular.isLoading || topMovies.isLoading;

  return (
    <div className="flex items-center flex-col">
      <div className="w-full min-h-[80vh] flex flex-col items-start justify-center px-4 lg:px-40 bg-hero-image bg-center bg-cover bg-no-repeat">
        <Heading text="tonton serunya tanpa batas" />
        <Description
          isMax={true}
          text="Sekumpulan film teratas yang bisa kamu lihat secara gratis, puas nonton dimanapun kapanpun tanpa harus memikirkan waktu yang pas buat nonton"
        />
        <Button link="#" text="view movies" />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MoviesLayouts categorie="now_playing" title="list movies" data={playMovies.data} />
          <MoviesLayouts categorie="popular" title="popular movies" data={popular.data} />
          <MoviesLayouts categorie="top_rated" title="top movies" data={topMovies.data} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
