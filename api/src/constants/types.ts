export interface OnlyStudio {
  id: string;
  logo: string;
  money: number;
  name: string;
  shortName: string;
}

export interface Movies {
  movies: Movie[];
}

export type Studio = OnlyStudio & Movies;

export interface Movie {
  genre: number;
  id: string;
  name: string;
  price: number;
  url: string;
}

export interface ConstructorMovie {
  genre: number;
  id: string;
  img: string;
  name: string;
  price: number;
  studioId: string;
}
