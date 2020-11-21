import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movie }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    movieStore.deleteMovie(movie);
  };
  return (
    <button type="button" class="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
