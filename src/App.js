import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import AddMovieButton from "./components/buttons/AddMovieButton";
import { Title } from "./styles";

function App() {
  return (
    <div>
      <Title>Movie Watch-List</Title>
      <AddMovieButton />
      <WatchList />
      <WatchedList />
    </div>
  );
}

export default App;
