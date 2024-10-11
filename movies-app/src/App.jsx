import "./App.css";
import React, { useState, useEffect } from "react";
// import { Avatar, Card, Grid, Typography } from "@material-ui/core";

const apiUrl = process.env.REACT_APP_API_URL;
// const defaultAvatar = process.env.REACT_APP_DEFAULT_AVATAR;

const App = () => {
  const [state, setState] = useState({
    studios: [],
    movies: [],
    avatarSize: 280,
    cardStyle: "regularCard",
  });

  useEffect(() => {
    const fetchStudios = async () => {
      const response = await fetch(`${apiUrl}/studios`);
      const data = await response.json();
      setState((prevState) => ({ ...prevState, studios: data }));
    };

    const fetchMovies = async () => {
      const response = await fetch(`${apiUrl}/movies`);
      const data = await response.json();
      setState((prevState) => ({ ...prevState, movies: data }));
    };

    fetchStudios();
    fetchMovies();
  }, []);

  console.log(state);

  return (
    <div className="App">
      <div className="App-studios App-flex">
        <p>Under re-construction!</p>
      </div>
    </div>
  );
};

export default App;
