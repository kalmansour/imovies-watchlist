import movieStore from "../../stores/movieStore";

const WatchedButton = ({ movieWatched }) => {
  const handleWatched = () => {
    movieStore.watchedMovie(movieWatched);
  };
  return (
    <button type="button" class="btn btn-info" onClick={handleWatched}>
      {movieWatched.watched === false ? "Watched" : "Unwatched"}
    </button>
  );
};

export default WatchedButton;
