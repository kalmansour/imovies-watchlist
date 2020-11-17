import movies from "./movies";
import MovieItem from "./MovieItem";

//Styling
import { ListWrapper } from "../styles";

const MovieList = () => {
  const movieList = movies.map((movie) => <MovieItem movie={movie} />);

  return <ListWrapper>{movieList}</ListWrapper>;
};

export default MovieList;
