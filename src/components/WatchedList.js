import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";
import { useState } from "react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const watchedList = movieStore.movies
    .filter(
      (movie) =>
        movie.watched === true &&
        movie.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} />);

  return (
    <>
      <button type="button" class="btn">
        Watched List<span class="badge badge-light">{watchedList.length}</span>
      </button>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {watchedList}</ListWrapper>
    </>
  );
};

export default observer(WatchedList);
