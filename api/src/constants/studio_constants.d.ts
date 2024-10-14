import { Studio } from "./types";

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

export declare const GENRE_ID: GenreId;

export type GenreString = {
  [key in keyof GenreId]: string;
};

export declare const GENRE_STRING: GenreString;

export declare const STUDIO: Studio;

