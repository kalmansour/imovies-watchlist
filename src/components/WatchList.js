import movieStore from "../stores/movieStore";
import { useState } from "react";
import { observer } from "mobx-react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//Styling
import { WatchListWrapper, ListWrapper, ListButtonStyled } from "../styles";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const watchList = movieStore.movies
    .filter(
      (movie) =>
        movie.watched === false &&
        movie.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} />);

  return (
    <WatchListWrapper>
      <button type="button" class="btn">
        {query === "" ? "Watch List " : "Searching for "}
      </button>
      <ListButtonStyled>{watchList.length}</ListButtonStyled>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watchList}</ListWrapper>
    </WatchListWrapper>
  );
};

export default observer(WatchList);
