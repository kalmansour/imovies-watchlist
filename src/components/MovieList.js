import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";

//To watch

//Styling
import { ListWrapper } from "../styles";

const MovieList = () => {
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} />
  ));

  return <ListWrapper>{movieList}</ListWrapper>;
};

export default observer(MovieList);
