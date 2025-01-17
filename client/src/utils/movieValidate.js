import { toast } from "react-toastify";

export const isValideMovie = (movieInfo) => {
  if (
    !movieInfo?.title ||
    !movieInfo?.description ||
    !movieInfo?.actors ||
    !movieInfo?.director ||
    !movieInfo?.genre ||
    !movieInfo?.rating ||
    !movieInfo?.releaseDate ||
    !movieInfo?.image
  ) {
    toast.error("Всі поля мають бути заповненні!");
    return false;
  }

  if (
    isNaN(Number(movieInfo?.rating)) ||
    +movieInfo?.rating > 10 ||
    +movieInfo?.rating < 0
  ) {
    toast.error("Рейтинг має бути числом від 0 до 10!");
    return false;
  }

  if (!/\d\d\.\d\d\.\d\d\d\d/.test(movieInfo?.releaseDate)) {
    toast.error("Дата має бути формату дд.мм.рррр");
    return false;
  }

  if (
    !/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i.test(movieInfo?.image)
  ) {
    toast.error("Вкажіть посилання на фото");
    return false;
  }

  return true;
};
