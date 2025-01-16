import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import "./index.css";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { ToastContainer } from "react-toastify";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/movies/",
    element: <HomePage />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>
);
