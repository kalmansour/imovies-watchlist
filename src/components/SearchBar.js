// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for movie name..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
