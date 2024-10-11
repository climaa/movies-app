export declare const PORT: number;

export interface MovieAge {
  movieId: string;
  years: number;
}

export declare const movieAge: MovieAge[];

export interface GenreId {
  adventures: number;
  horror: number;
  animation: number;
  heroes: number;
}

export const GENRE_ID: GenreId = {
  adventures: 1,
  horror: 2,
  animation: 3,
  heroes: 4,
};

export type GenreString = {
  [key in keyof GenreId]: string;
};

export const GENRE_STRING: GenreString = {
  [GENRE_ID.adventures]: "ADV",
  [GENRE_ID.horror]: "HOR",
  [GENRE_ID.animation]: "ANI",
  [GENRE_ID.heroes]: "HER",
};

export declare const STUDIO: Studio;