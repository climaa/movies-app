import "./App.css";
import React, { useState, useMemo, useEffect } from "react";
import useFetch, { Post } from "./api/fetch";
import useIsMobile from "./utils/hooks/useIsMobile";
import { createStudioNameMapping } from "./utils";
import {
  Avatar,
  Button,
  Card,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";

const App = () => {
  const [state, setState] = useState({
    avatarSize: 280,
    cardStyle: "regularCard",
    selectedStudio: null,
  });
  const { status: studioStatus, data: studios } = useFetch("/studios");
  const { status: moviesStatus, data: movies } = useFetch("/movies");
  const isMobile = useIsMobile();
  const [filteredMovies, setFilteredMovies] = useState([]);

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
    }));
  }, [isMobile]);

  useEffect(() => {
    setFilteredMovies(movies);

    if (state.selectedStudio) {
      const filtered = movies.filter(
        (movie) => movie.studioId === state.selectedStudio
      );
      setFilteredMovies(filtered);
    }
  }, [movies, state.selectedStudio]);

  const handleTransferMovie = async ({
    originStudioId,
    movieId,
    destinationStudioId,
  }) => {
    await Post("/transfer", { originStudioId, movieId, destinationStudioId });
    // TODO: Need here more logic to update the UI
    window.location.reload();
  };

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
          <>
            <Grid
              container
              className="App-studios"
              data-testid="studios_section"
            >
              {studios.map(({ id, name, logo, shortName, description }) => (
                <Paper
                  elevation={0}
                  key={shortName}
                  onClick={() =>
                    setState((prevState) => {
                      console.log(shortName);
                      return { ...prevState, selectedStudio: id };
                    })
                  }
                >
                  <Avatar alt={shortName} src={logo} />
                  <Typography>{name}</Typography>
                  {description && <p>{description}</p>}
                </Paper>
              ))}
            </Grid>
            {state.selectedStudio !== null && (
              <Button
                variant="outlined"
                onClick={() =>
                  setState((prevState) => ({
                    ...prevState,
                    selectedStudio: null,
                  }))
                }
              >
                Reset filter
              </Button>
            )}
          </>
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
            {filteredMovies.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={6} lg={4}>
                <Card className={state.cardStyle}>
                  <Typography>{studioNameMapping[movie?.studioId]}</Typography>
                  <Avatar
                    alt={movie.name}
                    className="Avatar__movie__image"
                    src={movie.img}
                    style={{
                      width: state.avatarSize,
                      height: state.avatarSize,
                    }}
                  />
                  <Grid item xs={5} sm={6} lg={6}>
                    <Grid item>
                      <Typography className="App__movie__name">
                        <strong>Name:</strong> {movie.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="App__movie__price">
                        Price: <strong>${movie.price}</strong>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="App__movie__transfer">
                        <strong>Transfer movie to studio:</strong>
                        <select
                          onChange={(event) => {
                            event.preventDefault();
                            handleTransferMovie({
                              originStudioId: movie?.studioId,
                              movieId: movie.id,
                              destinationStudioId: event.target.value,
                            });
                          }}
                        >
                          {Object.entries(studioNameMapping).map(
                            ([id, name]) => (
                              <option
                                key={id}
                                value={id}
                                defaultValue={id === movie.studioId}
                              >
                                {name}
                              </option>
                            )
                          )}
                        </select>
                      </Typography>
                    </Grid>
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
