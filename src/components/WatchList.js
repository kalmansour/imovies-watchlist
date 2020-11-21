import movieStore from "../stores/movieStore";
import { useState } from "react";
import { observer } from "mobx-react";

//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//Styling
import { ListWrapper } from "../styles";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const watchList = movieStore.movies
    .filter(
      (movie) =>
        movie.watched === false &&
        movie.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} />);

  //   const filteredCookies = cookieStore.cookies.filter((cookie) =>
  //   cookie.name.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <>
      <button type="button" class="btn">
        Watch List<span class="badge badge-light">{watchList.length}</span>
      </button>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watchList}</ListWrapper>
    </>
  );
};

export default observer(WatchList);
