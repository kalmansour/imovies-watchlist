import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import AddMovieButton from "./components/buttons/AddMovieButton";

function App() {
  return (
    <div>
      <AddMovieButton />
      <h1>WatchList</h1>
      <MovieList />
      <WatchedList />
    </div>
  );
}

export default App;
