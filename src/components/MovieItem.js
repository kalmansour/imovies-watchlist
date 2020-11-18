import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";

import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
      <DeleteButton movie={movie} />
      <WatchedButton movieWatched={movie} />
    </>
  );
};

export default observer(MovieItem);
