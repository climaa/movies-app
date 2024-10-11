import type { Studio, Movie, ConstructorMovie, OnlyStudio } from "@constants/types";

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

export const getAllMoviesFromStudios = (studios: Studio[]): ConstructorMovie[] => {
  const allMovies: ConstructorMovie[] = [];

  studios.forEach((singleStudio) => {
    (singleStudio.movies as unknown as Movie[]).forEach((movie: Movie) => {
      allMovies.push(movieConstructor(movie, singleStudio));
    });
  });

  return allMovies;
};

export const getMovieById = (studios: Studio[], id: string): ConstructorMovie | undefined => {
  const allMovies = getAllMoviesFromStudios(studios);

  return allMovies?.find((movie) => movie.id === id);
};

export const movieConstructor = (
  movie: Movie,
  studio: OnlyStudio
): ConstructorMovie => ({
  genre: movie.genre,
  id: movie.id,
  img: movie.url,
  name: movie.name,
  studioId: studio.id,
});
