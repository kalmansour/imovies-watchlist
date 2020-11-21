import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import { MovieWrapper } from "../styles";

import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  return (
    <>
      <MovieWrapper>
        <p>{movie.title}</p>
        <DeleteButton movie={movie} />
        <WatchedButton movieWatched={movie} />
      </MovieWrapper>
    </>
  );
};

export default observer(MovieItem);
