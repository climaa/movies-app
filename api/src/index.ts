import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getAllMoviesFromStudios, getMovieById } from "@helpers/helpers";
import { getUserByUsernameAndPassword } from "@helpers/auth";
import {
  disney,
  movieAge,
  PORT,
  sony,
  warner,
  studiosMap,
  StudiosMap
} from "@constants/studio_constants";
import type { Movie, Studio, OnlyStudio } from "@constants/types";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (_req: Request, res: Response) {
  res.json({ health: "ok" });
});

app.get("/studios", function (_req: Request, res: Response) {
  const removeMovies = (studio: Studio): OnlyStudio => {
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

app.get("/movies", function (_req: Request, res: Response) {
  // TODO: If any bad "request"; logic should be handled on middleware
  res.json(getAllMoviesFromStudios([disney, warner, sony]));
});

// TODO: Here can be a decorator <https://www.typescriptlang.org/docs/handbook/decorators.html>
app.get("/movies/:id", function (req: Request, res: Response) {
  const { id } = req.params as { id: string };

  if (Number(id) < 0) {
    res.status(400).json({ error: "Invalid id" });
    return
  }

  res.json(getMovieById([disney, warner, sony], id));
});

app.get("/movieAge", function (_req: Request, res: Response) {
  res.json(movieAge);
});

// TODO: Add the capability to sell the movie rights to another studio
app.post("/transfer", function (req: Request, res: Response) {
  const { originStudioId, movieId, destinationStudioId } = req.body as { originStudioId: number; movieId: string; destinationStudioId: number };
  const originStudio: Studio = studiosMap[originStudioId];
  // Find the movie in the origin studio, and get the movie object
  const index: number = originStudio.movies.findIndex((movie: Movie) => movie.id === movieId);
  const movie: Movie = originStudio.movies[index];
  // Remove from origin studio the movie
  studiosMap[originStudioId].movies.splice(index, 1);
  // Add the movie to the destination studio
  studiosMap[destinationStudioId].movies.push(movie);
  res.json(studiosMap);
});

app.post("/login", function (req: Request, res: Response) {
  const { username, password } = req.body as { username: string; password: string };
  if (username === "" || password === "") {
    res.status(400).json({ error: "Missing username or password" });
    return;
  }

  const user = getUserByUsernameAndPassword({ username, password });

  if (!user) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
