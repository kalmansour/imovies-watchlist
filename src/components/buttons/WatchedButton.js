import movieStore from "../../stores/movieStore";
import WatchedButtonStyled from "../../styles";

const WatchedButton = ({ movieWatched }) => {
  const handleWatched = () => {
    movieStore.watchedMovie(movieWatched);
  };
  return (
    <WatchedButtonStyled onClick={handleWatched}>
      {movieWatched.watched === false ? "Watched" : "Unwatched"}
    </WatchedButtonStyled>
  );
};

export default WatchedButton;
