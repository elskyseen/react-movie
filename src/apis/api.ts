import { axiosInstance } from "../config/axios";

const getPlayingMovies = async () => {
  const { data } = await axiosInstance.get("now_playing");
  return data.results;
};

const getPopular = async () => {
  const { data } = await axiosInstance.get("popular");
  return data.results;
};

const getTopRated = async () => {
  const { data } = await axiosInstance.get("top_rated");
  return data.results;
};

const getDetailMovie = async (id: string) => {
  const { data } = await axiosInstance.get(`${id}`);
  return data;
};

export { getPlayingMovies, getPopular, getTopRated, getDetailMovie };
