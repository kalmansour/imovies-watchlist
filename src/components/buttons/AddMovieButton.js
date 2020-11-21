import movieStore from "../../stores/movieStore";
import { useState } from "react";
import { AddMovieButton, AddMovieStyled } from "../../styles";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    watched: false,
  });

  // Revise this
  const handleChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.addMovie(movie);
  };

  return (
    <AddMovieStyled>
      <input
        placeholder="Add movie name..."
        name="title"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Add image url..."
        name="image"
        type="text"
        onChange={handleChange}
      />
      <AddMovieButton type="button" class="btn btn-info" onClick={handleSubmit}>
        Add
      </AddMovieButton>
    </AddMovieStyled>
  );
};

export default AddMovie;
