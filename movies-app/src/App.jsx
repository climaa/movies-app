import "./App.css";
import React, { useState } from "react";
import useFetch from "./api/fetch";
import { Avatar, Card, Paper, Grid, Typography } from "@material-ui/core";

const App = () => {
  const [state, setState] = useState({
    avatarSize: 280,
    cardStyle: "regularCard",
  });
  const { status: studioStatus, data: studios } = useFetch("/studios");
  const { status: moviesStatus, data: movies } = useFetch("/movies");

  return (
    <div className="App">
      <div className="App-flex">
        <h1>Studios</h1>
        {studioStatus === "idle" ||
          (studioStatus === "pending" && <p>Loading studios...</p>)}
        {studioStatus === "resolved" && <div>Something went wrong!</div>}
        {studios.length === 0 && studioStatus === "resolved" ? (
          <p>No studios found!</p>
        ) : (
          <Grid container className="App-studios">
            {studios.map(({ name, logo, shortName, description }) => (
              <Paper elevation={0} key={shortName}>
                <Typography>{name}</Typography>
                <Avatar alt={shortName} src={logo} />
                {description && <p>{description}</p>}
              </Paper>
            ))}
          </Grid>
        )}

        <h3>Movies</h3>
        {moviesStatus === "idle" ||
          (moviesStatus === "pending" && <p>Loading images...</p>)}
        {moviesStatus === "resolved" && <div>Something went wrong!</div>}
        {movies.length === 0 && moviesStatus === "resolved" ? (
          <p>Not movies found!</p>
        ) : (
          <Grid
            alignItems="center"
            className="App-studios"
            container
            justifyContent="center"
          >
            {movies.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={6} lg={4}>
                <Card className={state.cardStyle}>
                  <Avatar
                    alt={movie.name}
                    className="Avatar__movie__image"
                    src={movie.img}
                    style={{
                      width: state.avatarSize,
                      height: state.avatarSize,
                    }}
                  />
                  <div>
                    <Typography className="App__movie__name">
                      {movie.name}
                    </Typography>
                    <Typography className="App__movie__position">
                      {movie.position}
                    </Typography>
                  </div>
                  {/* TODO: Get studio name from this element */}
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default App;
