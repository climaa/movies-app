import { Studio, StudiosMap } from "./types";

export const PORT = 3000;

export const movieAge = [
  {
    movieId: "11",
    years: 19,
  },
  {
    movieId: "12",
    years: 5,
  },
  {
    movieId: "13",
    years: 0,
  },
  {
    movieId: "14",
    years: 9,
  },
  {
    movieId: "21",
    years: 35,
  },
  {
    movieId: "22",
    years: 5,
  },
  {
    movieId: "23",
    years: 0,
  },
  {
    movieId: "24",
    years: 0,
  },
  {
    movieId: "31",
    years: 22,
  },
  {
    movieId: "32",
    years: 5,
  },
  {
    movieId: "33",
    years: 0,
  },
  {
    movieId: "34",
    years: 3,
  },
];

export const GENRE_ID = {
  adventures: 9,
  horror: 6,
  animation: 4,
  heroes: 1,
};

export const GENRE_STRING = {
  [GENRE_ID.adventures]: "ADV",
  [GENRE_ID.horror]: "HOR",
  [GENRE_ID.animation]: "ANI",
  [GENRE_ID.heroes]: "HER",
};

export const disney: Studio = {
  id: "1",
  name: "Disney studios",
  shortName: "Disney",
  logo: "https://cdn.mos.cms.futurecdn.net/qfFFFhnM8LwZnjpTECN3oB.jpg",
  money: 1000,
  movies: [
    {
      genre: GENRE_ID.horror,
      id: "11",
      name: "Nightmare before christmas",
      price: 600,
      url: "https://www.dimanoinmano.it/img/638590/full/libri-per-ragazzi/infanzia/nightmare-before-christmas.jpg",
    },
    {
      genre: GENRE_ID.animation,
      id: "12",
      name: "Aladdin",
      price: 100,
      url: "https://www.lainformacion.com/files/article_default_content/uploads/2018/11/23/5bf84292d23b5.jpeg",
    },
    {
      genre: GENRE_ID.heroes,
      id: "13",
      name: "The avengers",
      price: 300,
      url: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/The_Avengers_Poster.png/revision/latest?cb=20150610135853&path-prefix=es",
    },
    {
      genre: GENRE_ID.adventures,
      id: "14",
      name: "John Carter",
      price: 400,
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/John_carter_poster.jpg/220px-John_carter_poster.jpg",
    },
  ],
};

export const warner: Studio = {
  id: "2",
  name: "Warner Bros.",
  shortName: "Warner",
  logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z4nxu-626ae303-e830-4b4f-ab8b-4aff7f1bef0f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyYzZmNjg0LWQ0NDctNDQ1Ny04NGZhLTEyMDMzY2ZkNTgxZVwvZDl6NG54dS02MjZhZTMwMy1lODMwLTRiNGYtYWI4Yi00YWZmN2YxYmVmMGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gtKaGVrDg8gzU7QFThusbHJw2d6bKgnDauezUcZo-1A",
  money: 900,
  movies: [
    {
      genre: GENRE_ID.horror,
      id: "21",
      name: "The conjuring",
      price: 100,
      url: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    },
    {
      genre: GENRE_ID.animation,
      id: "22",
      name: "Space Jame",
      price: 500,
      url: "https://static.wikia.nocookie.net/warnerbros/images/d/d0/SpaceJam.jpg/revision/latest/scale-to-width-down/350?cb=20120727135751&path-prefix=es",
    },
    {
      genre: GENRE_ID.heroes,
      id: "23",
      name: "The dark knight rises",
      price: 400,
      url: "https://pics.filmaffinity.com/The_Dark_Knight_Rises-149544881-large.jpg",
    },
    {
      genre: GENRE_ID.adventures,
      id: "24",
      name: "Fantastic beasts and where to find them",
      price: 500,
      url: "https://i.pinimg.com/originals/11/95/b8/1195b802fe9108f0458830054ba1fd57.jpg",
    },
  ],
};

export const sony: Studio = {
  id: "3",
  name: "Sony Pictures",
  shortName: "Sony",
  logo: "https://logoeps.com/wp-content/uploads/2013/05/sony-pictures-entertainment-vector-logo.png",
  money: 700,
  movies: [
    {
      genre: GENRE_ID.horror,
      id: "31",
      url: "https://m.media-amazon.com/images/M/MV5BMzVmMGMzODEtZmQ3Yy00NTU0LTgzNWMtYTkyYWQwY2Q3Y2U0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      name: "Slender man",
      price: 700,
    },
    {
      genre: GENRE_ID.animation,
      id: "32",
      url: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      name: "Spider-man into the spider-verse",
      price: 450,
    },
    {
      genre: GENRE_ID.heroes,
      id: "33",
      url: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
      name: "Spider-man",
      price: 500,
    },
    {
      genre: GENRE_ID.adventures,
      id: "34",
      url: "https://m.media-amazon.com/images/M/MV5BZDEwY2FkNDYtNTVjYi00YWFkLWJmOWMtYjk5NTMyNzZlYWEwXkEyXkFqcGc@._V1_QL75_UY562_CR19,0,380,562_.jpg",
      name: "Last action hero",
      price: 100,
    },
  ],
};

/**
 * A collection of image URLs for Sony movies.
 * Each key represents a unique identifier for a movie, and the value is the URL of the movie's image.
 *
 * @constant
 * @type {Object.<number, string>}
 * @property {string} 31 - URL for the image of the movie with ID 31.
 * @property {string} 32 - URL for the image of the movie with ID 32.
 * @property {string} 33 - URL for the image of the movie with ID 33.
 * @property {string} 34 - URL for the image of the movie with ID 34.
 */
export const sonyImages: { [n: number]: string } = {
  31: "https://m.media-amazon.com/images/M/MV5BMjE0MzcwMDAyNl5BMl5BanBnXkFtZTgwMzc4ODg0NDM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  32: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
  33: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
  34: "https://static.wikia.nocookie.net/ideas/images/0/0e/Last_action_hero_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20180121010346",
};

/**
 * A mapping of studio IDs to their respective studio names.
 *
 * @constant
 * @type {Object.<number, string>}
 * @property {string} 1 - Disney studio.
 * @property {string} 2 - Warner studio.
 * @property {string} 3 - Sony studio.
 */
export const studiosMap: StudiosMap = {
  1: disney,
  2: warner,
  3: sony,
};
