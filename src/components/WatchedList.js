import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";
import { useState } from "react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//Styles
import { ListWrapper, ListButtonStyled, WatchedListWrapper } from "../styles";

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
    <WatchedListWrapper>
      <button type="button" class="btn">
        {query === "" ? "Watched List " : "Searching for "}
      </button>
      <ListButtonStyled>{watchedList.length} </ListButtonStyled>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {watchedList}</ListWrapper>
    </WatchedListWrapper>
  );
};

export default observer(WatchedList);
