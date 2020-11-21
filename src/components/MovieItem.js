import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import { MovieWrapper, ItemHeader } from "../styles";
import { useState } from "react";
import { observer } from "mobx-react";
import Modal from "react-modal";

const MovieItem = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <MovieWrapper>
        <ItemHeader onClick={openModal}>{movie.title}</ItemHeader>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "100px",
              left: "680px",
              right: "auto",
              bottom: "auto",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <img
            style={{ width: "500px", height: "700px" }}
            src={movie.image}
            alt={movie.title}
          />
        </Modal>
        <DeleteButton movie={movie} />
        <WatchedButton movieWatched={movie} />
      </MovieWrapper>
    </>
  );
};

export default observer(MovieItem);
