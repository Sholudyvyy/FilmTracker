import { Modal } from "./Modal";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createMovieThunk } from "../features/movies/moviesSlice";
import { isValideMovie } from "../utils/movieValidate";
import { ModalInput } from "./Modalnput";

export const CreateModal = ({ setActive }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const handleConfirm = useCallback(() => {
    if (
      isValideMovie(
        title,
        description,
        actors,
        director,
        genre,
        rating,
        releaseDate,
        image
      )
    ) {
      dispatch(
        createMovieThunk({
          title,
          description,
          actors,
          director,
          genre,
          rating,
          releaseDate,
          image,
        })
      );
      setActive(false);
    }
  }, [
    setActive,
    dispatch,
    title,
    description,
    actors,
    director,
    genre,
    rating,
    releaseDate,
    image,
  ]);

  return (
    <>
      <Modal
        setActive={setActive}
        title="Додати фільм"
        confirmText="Додати"
        rejectText="Відхилити"
        confirm={handleConfirm}
      >
        <div className="max-h-[70vh] overflow-y-auto space-y-4 p-6">
          <ModalInput
            placeholder="Назва"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <ModalInput
            placeholder="Опис"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <ModalInput
            placeholder="Актори"
            value={actors}
            onChange={(event) => setActors(event.target.value)}
          />
          <ModalInput
            placeholder="Режисер"
            value={director}
            onChange={(event) => setDirector(event.target.value)}
          />
          <ModalInput
            placeholder="Жанр"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
          <ModalInput
            placeholder="Рейтинг"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <ModalInput
            placeholder="Рейтинг"
            value={releaseDate}
            onChange={(event) => setReleaseDate(event.target.value)}
          />
          <ModalInput
            placeholder="Посилання на постер"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};
