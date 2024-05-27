import IButton from "./IButton";

interface ICard {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string;
  original_language: string;
  link?: string;
}

export default ICard;
