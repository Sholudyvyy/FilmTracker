import { toast } from "react-toastify";

export const isValideMovie = (
  title,
  description,
  actors,
  director,
  genre,
  rating,
  releaseDate,
  image
) => {
  if (
    !title ||
    !description ||
    !actors ||
    !director ||
    !genre ||
    !rating ||
    !releaseDate ||
    !image
  ) {
    toast.error("Всі поля мають бути заповненні!");
    return false;
  }

  if (isNaN(Number(rating)) || +rating > 10 || +rating < 0) {
    toast.error("Рейтинг має бути числом від 0 до 10!");
    return false;
  }

  if (!/\d\d\.\d\d\.\d\d\d\d/.test(releaseDate)) {
    toast.error("Дата має бути формату дд.мм.рррр");
    return false;
  }

  if (!/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i.test(image)) {
    toast.error("Вкажіть посилання на фото");
    return false;
  }

  return true;
};
