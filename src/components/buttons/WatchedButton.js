import movieStore from "../../stores/movieStore";

const WatchedButton = ({ movieWatched }) => {
  // const [watched, setWatched]= useState(false)

  const handleWatched = () => {
    movieStore.watchedMovie(movieWatched);
  };
  return (
    <button onClick={handleWatched}>
      {" "}
      {movieWatched.watched === false ? "Watched" : "Unwatched"}
    </button>
  );
};

export default WatchedButton;
