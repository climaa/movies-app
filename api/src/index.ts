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
} from "@constants/studio_constants";
import type { Studio, OnlyStudio } from "@constants/types";

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

// TODO: 1 add the capability to sell the movie rights to another studio
app.post("/transfer", function (_req: Request, res: Response) {});

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
