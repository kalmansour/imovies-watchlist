import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

//To watch

//Styling
import { ListWrapper } from "../styles";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter((movie) => movie.watched === false)
    .map((movie) => <MovieItem movie={movie} />);

  return;
  <>
    <SearchBar setQuery={setQuery} />
    <ListWrapper>{movieList}</ListWrapper>
  </>;
};

export default observer(MovieList);
