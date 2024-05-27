import { useQuery } from "@tanstack/react-query";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
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

  return (
    <div className="flex items-center flex-col">
      {/* <Navbar /> */}
      <div className="w-full min-h-[80vh] flex flex-col items-start justify-center px-40 bg-hero-image bg-center bg-cover bg-no-repeat">
        <Heading text="tonton serunya tanpa batas" />
        <Description
          isMax={true}
          text="Sekumpulan film teratas yang bisa kamu lihat secara gratis, puas nonton dimanapun kapanpun tanpa harus memikirkan waktu yang pas buat nonton"
        />
        <Button text="view movies" />
      </div>
      {playMovies.isLoading || popular.isLoading || topMovies.isLoading ? (
        <Loading />
      ) : (
        <>
          <MoviesLayouts title="list movies" data={playMovies.data} />
          <MoviesLayouts title="popular movies" data={popular.data} />
          <MoviesLayouts title="top movies" data={topMovies.data} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
