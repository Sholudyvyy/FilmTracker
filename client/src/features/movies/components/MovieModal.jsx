import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types"; 

import { isValideMovie } from "utils/movieValidate";
import { createMovieThunk, editMovieThunk } from "../moviesSlice";

import { Modal } from "components/base/Modal";
import { ModalInput } from "components/base/Modallnput";
import { modalFields } from "constans/modalFields";

export const MovieModal = ({ setActive, movie }) => {
  const [movieInfo, setMovieInfo] = useState({
    title: movie?.title || "",
    description: movie?.description || "",
    actors: movie?.actors || "",
    director: movie?.director || "",
    genre: movie?.genre || "",
    rating: movie?.rating || "",
    releaseDate: movie?.releaseDate || "",
    image: movie?.image || "",
  });

  const dispatch = useDispatch();

  const updateMovieDetails = (field, value) => {
    setMovieInfo((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleConfirm = useCallback(() => {
    if (isValideMovie(movieInfo)) {
      if (movie) {
        dispatch(
          editMovieThunk({
            id: movie._id,
            movieInfo,
          })
        );
      } else {
        dispatch(
          createMovieThunk({
            movieInfo,
          })
        );
      }

      setActive(false);
    }
  }, [dispatch, movie, movieInfo, setActive]);

  return (
    <Modal
      setActive={setActive}
      title={movie?.title || "Додати фільм"}
      confirmText="Зберегти"
      rejectText="Відхилити"
      confirm={handleConfirm}
    >
      <div className="max-h-[70vh] overflow-y-auto space-y-4 p-6">
        {modalFields.map((field) => (
          <ModalInput
            placeholder={field.placeholder}
            value={movieInfo[field.fieldName]}
            onChange={(event) =>
              updateMovieDetails(field.fieldName, event.target.value)
            }
          />
        ))}
      </div>
    </Modal>
  );
};

MovieModal.propTypes = {
  movie: PropTypes.object,
  setActive: PropTypes.func,
};
