import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getAllMoviesFromStudios } from "@helpers/helpers";
import {
  disney,
  movieAge,
  PORT,
  sony,
  warner,
} from "@constants/studio_constants";
import type { Studio, Movie } from "@constants/types";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({ health: "ok" });
});

app.get("/studios", function (req, res) {
  const removeMovies = (studio: Studio) => {
    const { movies, ...rest } = studio;
    return rest;
  };

  const response = [
    removeMovies(disney),
    removeMovies(warner),
    removeMovies(sony),
  ];

  res.json(response);
});

app.get("/movies", function (req, res) {
  try {
    res.json(getAllMoviesFromStudios([disney, warner, sony]));
  } catch (e) {
    res.status(500);
  }
});

app.get("/movieAge", function (req, res) {
  res.json(movieAge);
});

// TODO: 1 add the capability to sell the movie rights to another studio
app.post("/transfer", function (req, res) {});

// TODO: 2 Add logging capabilities into the movies-app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
