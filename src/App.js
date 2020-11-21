import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import Home from "./components/Home";
import AddMovieButton from "./components/buttons/AddMovieButton";
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <AddMovieButton />
      <WatchList />
      <WatchedList />
    </ThemeProvider>
  );
}

export default App;
