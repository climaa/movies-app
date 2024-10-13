// src/index.ts
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// src/helpers/helpers.ts
var getAllMoviesFromStudios = (studios) => {
  const allMovies = [];
  studios.forEach((singleStudio) => {
    singleStudio.movies.forEach((movie) => {
      allMovies.push(movieConstructor(movie, singleStudio));
    });
  });
  return allMovies;
};
var getMovieById = (studios, id) => {
  const allMovies = getAllMoviesFromStudios(studios);
  return allMovies?.find((movie) => movie.id === id);
};
var movieConstructor = (movie, studio) => ({
  genre: movie.genre,
  id: movie.id,
  img: movie.url,
  name: movie.name,
  price: movie.price,
  studioId: studio.id
});

// src/constants/users.ts
var users = [
  {
    id: 1,
    name: "John Doe",
    email: "jhon.doe@domain.com",
    password: "123456",
    avatar: "https://i.pravatar.cc/600?img=17"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@domain.com",
    password: "#user.test!",
    avatar: "https://i.pravatar.cc/600?img=5"
  }
];

// src/helpers/auth.ts
var getUserByUsernameAndPassword = ({
  username,
  password
}) => users.find(
  (user) => user.email === username && user.password === password
);

// src/constants/studio_constants.ts
var PORT = 3e3;
var movieAge = [
  {
    movieId: "11",
    years: 19
  },
  {
    movieId: "12",
    years: 5
  },
  {
    movieId: "13",
    years: 0
  },
  {
    movieId: "14",
    years: 9
  },
  {
    movieId: "21",
    years: 35
  },
  {
    movieId: "22",
    years: 5
  },
  {
    movieId: "23",
    years: 0
  },
  {
    movieId: "24",
    years: 0
  },
  {
    movieId: "31",
    years: 22
  },
  {
    movieId: "32",
    years: 5
  },
  {
    movieId: "33",
    years: 0
  },
  {
    movieId: "34",
    years: 3
  }
];
var GENRE_ID = {
  adventures: 9,
  horror: 6,
  animation: 4,
  heroes: 1
};
var GENRE_STRING = {
  [GENRE_ID.adventures]: "ADV",
  [GENRE_ID.horror]: "HOR",
  [GENRE_ID.animation]: "ANI",
  [GENRE_ID.heroes]: "HER"
};
var disney = {
  id: "1",
  name: "Disney studios",
  shortName: "Disney",
  logo: "https://cdn.mos.cms.futurecdn.net/qfFFFhnM8LwZnjpTECN3oB.jpg",
  money: 1e3,
  movies: [
    {
      id: "11",
      name: "Nightmare before christmas",
      genre: GENRE_ID.horror,
      url: "https://www.dimanoinmano.it/img/638590/full/libri-per-ragazzi/infanzia/nightmare-before-christmas.jpg",
      price: 600
    },
    {
      id: "12",
      name: "Aladdin",
      genre: GENRE_ID.animation,
      url: "https://www.lainformacion.com/files/article_default_content/uploads/2018/11/23/5bf84292d23b5.jpeg",
      price: 100
    },
    {
      id: "13",
      name: "The avengers",
      genre: GENRE_ID.heroes,
      url: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/The_Avengers_Poster.png/revision/latest?cb=20150610135853&path-prefix=es",
      price: 300
    },
    {
      id: "14",
      name: "John Carter",
      genre: GENRE_ID.adventures,
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/John_carter_poster.jpg/220px-John_carter_poster.jpg",
      price: 400
    }
  ]
};
var warner = {
  id: "2",
  name: "Warner Bros.",
  shortName: "Warner",
  logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z4nxu-626ae303-e830-4b4f-ab8b-4aff7f1bef0f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyYzZmNjg0LWQ0NDctNDQ1Ny04NGZhLTEyMDMzY2ZkNTgxZVwvZDl6NG54dS02MjZhZTMwMy1lODMwLTRiNGYtYWI4Yi00YWZmN2YxYmVmMGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gtKaGVrDg8gzU7QFThusbHJw2d6bKgnDauezUcZo-1A",
  money: 900,
  movies: [
    {
      id: "21",
      name: "The conjuring",
      genre: GENRE_ID.horror,
      url: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
      price: 100
    },
    {
      id: "22",
      name: "Space Jame",
      genre: GENRE_ID.animation,
      url: "https://static.wikia.nocookie.net/warnerbros/images/d/d0/SpaceJam.jpg/revision/latest/scale-to-width-down/350?cb=20120727135751&path-prefix=es",
      price: 500
    },
    {
      id: "23",
      name: "The dark knight rises",
      genre: GENRE_ID.heroes,
      url: "https://pics.filmaffinity.com/The_Dark_Knight_Rises-149544881-large.jpg",
      price: 400
    },
    {
      id: "24",
      name: "Fantastic beasts and where to find them",
      genre: GENRE_ID.adventures,
      url: "https://i.pinimg.com/originals/11/95/b8/1195b802fe9108f0458830054ba1fd57.jpg",
      price: 500
    }
  ]
};
var sony = {
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
      price: 700
    },
    {
      genre: GENRE_ID.animation,
      id: "32",
      url: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      name: "Spider-man into the spider-verse",
      price: 450
    },
    {
      genre: GENRE_ID.heroes,
      id: "33",
      url: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
      name: "Spider-man",
      price: 500
    },
    {
      genre: GENRE_ID.adventures,
      id: "34",
      url: "https://m.media-amazon.com/images/M/MV5BZDEwY2FkNDYtNTVjYi00YWFkLWJmOWMtYjk5NTMyNzZlYWEwXkEyXkFqcGc@._V1_QL75_UY562_CR19,0,380,562_.jpg",
      name: "Last action hero",
      price: 100
    }
  ]
};

// src/index.ts
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", function(_req, res) {
  res.json({ health: "ok" });
});
app.get("/studios", function(_req, res) {
  const removeMovies = (studio) => {
    const { movies, ...rest } = studio;
    return rest;
  };
  const response = [
    removeMovies(disney),
    removeMovies(warner),
    removeMovies(sony)
  ];
  res.json(response);
});
app.get("/movies", function(_req, res) {
  res.json(getAllMoviesFromStudios([disney, warner, sony]));
});
app.get("/movies/:id", function(req, res) {
  const { id } = req.params;
  if (Number(id) < 0) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  res.json(getMovieById([disney, warner, sony], id));
});
app.get("/movieAge", function(_req, res) {
  res.json(movieAge);
});
app.post("/transfer", function(_req, res) {
});
app.post("/login", function(req, res) {
  const { username, password } = req.body;
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
