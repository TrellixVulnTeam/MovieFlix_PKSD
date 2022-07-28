import "./styles.css";
import { Movie } from "../../types/movie";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="movie-card base-card">
        <div className="movie-card-img">
          <img src={movie.imgUrl} alt="Capa do filme" />
        </div>
        <div className="movie-card-info">
          <h6>{movie.title}</h6>
          <span>{movie.subTitle}</span>
          <span>{movie.year}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
