const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./src/routes/movieRoutes");

require("dotenv").config();

const db = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/movies", routes);

mongoose
  .connect(db)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
