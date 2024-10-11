export interface Studio {
    id: string;
    name: string;
    shortName: string;
    logo: string;
    money: number;
    movies: Movie[];
  }
  
  export interface Movie {
    id: string;
    name: string;
    genre: number;
    img?: string;
    url?: string;
    price: number;
  }