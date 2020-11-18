import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movie }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    movieStore.deleteMovie(movie);
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
