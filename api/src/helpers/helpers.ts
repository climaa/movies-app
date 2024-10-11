import { GENRE_STRING } from "@constants/studio_constants";
import type { Studio, Movie } from "@constants/types";

export const getMovie = (
  movieId: string,
  studios: Studio[]
): { movie: Movie; studioId: string } | false => {
  let movie;
  const studio = studios.find((t) => {
    movie = t.movies.find((p) => p.id === movieId);
    return movie;
  });
  if (movie && studio) {
    return { movie, studioId: studio.id };
  }

  return false;
};

export const getAllMoviesFromStudios = (studios: Studio[]): Movie[] => {
  const allMovies: Movie[] = [];

  studios.forEach((singleStudio) => {
    singleStudio.movies.map((movie) => {
      allMovies.push(movieConstructor(movie, singleStudio));
    });
  });

  return allMovies;
};

export const movieConstructor = (movie: Movie, studio: Studio): Movie => {
  //Set url property to img
  if (movie.url) {
    Object.defineProperty(
      movie,
      "img",
      Object.getOwnPropertyDescriptor(movie, "url") || ""
    );
    delete movie["url"]; // ???
  } 
  // TODO: something with GENRE_STRING[movie.price]; ???
  
  // Add studioId from parent object
  Object.defineProperty(
    movie,
    "studioId",
    Object.getOwnPropertyDescriptor(studio, "id") || ""
  );

  // TODO: Remove non wanted properties ???
  // delete movie["price"];
  // delete movie["id"];

  return movie;
};
