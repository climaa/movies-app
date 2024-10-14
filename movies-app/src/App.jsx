import "./App.css";
import React, { useState, useMemo, useEffect } from "react";
import useFetch from "./api/fetch";
import useIsMobile from './utils/hooks/useIsMobile';
import { createStudioNameMapping } from "./utils";
import { Avatar, Card, Paper, Grid, Typography } from "@material-ui/core";

const App = () => {
  const [state, setState] = useState({
    avatarSize: 280,
    cardStyle: "regularCard",
  });
  const { status: studioStatus, data: studios } = useFetch("/studios");
  const { status: moviesStatus, data: movies } = useFetch("/movies");
  const isMobile = useIsMobile();

  const studioNameMapping = useMemo(
    () => createStudioNameMapping(studios),
    [studios]
  );

  // Bad practice: is better create CSS in a long term
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      avatarSize: isMobile ? 60 : 280,
      cardStyle: isMobile ? "mobileCard" : "regularCard",
    }))
  }, [isMobile]);

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
                <Avatar alt={shortName} src={logo} />
                <Typography>{name}</Typography>
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
                  <Typography >{studioNameMapping[movie?.studioId]}</Typography>
                  <Avatar
                    alt={movie.name}
                    className="Avatar__movie__image"
                    src={movie.img}
                    style={{
                      width: state.avatarSize,
                      height: state.avatarSize,
                    }}
                  />
                  <Grid item xs={5} sm={6} lg={4}>
                    <Typography className="App__movie__name">
                      <strong>Name:</strong> {movie.name}
                    </Typography>
                    <Typography className="App__movie__price">
                      Price: <strong>${movie.price}</strong>
                    </Typography>
                  </Grid>
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
