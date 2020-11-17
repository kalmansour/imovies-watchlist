import movies from "./movies";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const movieList = movies.map((movie) => <MovieItem movie={movie} />);

  return <div>{movieList}</div>;
};

export default MovieList;
