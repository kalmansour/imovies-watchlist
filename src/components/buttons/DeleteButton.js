import movieStore from "../../stores/movieStore";
// import DeleteButton from "../../styles";

const Delete = ({ movie }) => {
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

export default Delete;
