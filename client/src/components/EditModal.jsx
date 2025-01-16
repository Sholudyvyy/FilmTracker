import { useState, useCallback } from "react";
import { Modal } from "./Modal";
import { editMovie } from "../api/moviesApi";
import { useDispatch } from "react-redux";
import { editMovieThunk } from "../features/movies/moviesSlice";
import { isValideMovie } from "../utils/movieValidate";
import { ModalInput } from "./Modalnput";

export const EditModal = ({ setActive, movie }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [actors, setActors] = useState(movie.actors);
  const [director, setDirector] = useState(movie.director);
  const [genre, setGenre] = useState(movie.genre);
  const [rating, setRating] = useState(movie.rating);
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate);
  const [image, setImage] = useState(movie.image);

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
      editMovie(
        movie._id,
        title,
        description,
        actors,
        director,
        genre,
        rating,
        releaseDate,
        image
      );
      dispatch(
        editMovieThunk({
          id: movie._id,
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
    actors,
    description,
    director,
    dispatch,
    genre,
    image,
    movie._id,
    rating,
    releaseDate,
    setActive,
    title,
  ]);

  return (
    <>
      <Modal
        setActive={setActive}
        title={movie.title}
        confirmText="Редагувати"
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
