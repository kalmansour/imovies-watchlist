import movieStore from "../../stores/movieStore";
import { useState } from "react";

const AddMovieButton = () => {
  const [movie, setMovie] = useState({
    title: "",
    watched: false,
  });

  // Revise this
  const handleChange = (event) => {
    setMovie({ ...movie, title: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.addMovie(movie);
  };

  return (
    <div>
      <input name="title" type="text" onChange={handleChange} />
      <button type="button" class="btn btn-info" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddMovieButton;
