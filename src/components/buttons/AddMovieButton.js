import movieStore from "../../stores/movieStore";

const AddMovieButton = () => {
  // Revise this
  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.addMovie();
  };

  const handleChange = (event) => {
    movieStore.addMovie(event.target.value);
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        className="form-control"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddMovieButton;
