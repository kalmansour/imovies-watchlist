import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

//Styles
import { ListWrapper } from "../styles";

//Components
import MovieItem from "./MovieItem";

const WatchedList = () => {
  const watchedList = movieStore.watchedmovies.map((watchedmovie) => (
    <MovieItem movie={watchedmovie} />
  ));

  return (
    <ListWrapper>
      <h1>Watched List</h1>
      {watchedList}
    </ListWrapper>
  );
};

export default observer(WatchedList);
