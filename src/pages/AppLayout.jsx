import { useState } from "react";
import { WatchedMoviesList } from "../components/WatchedMoviesList";
import { MovieList } from "../components/MovieList";
import { Box } from "../components/Box";
import { Main } from "../components/Main";
import { NumResults } from "../components/NumResults";
import { Search } from "../components/Search";
import { NavBar } from "../components/NavBar";
import { WatchedSummary } from "../components/WatchedSummary";
import { useSelector } from "react-redux";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import MovieDetails from "../components/MovieDetails";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function AppLayout() {
  //   const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);
  const { movies, error, isLoading, select, watched } = useSelector(
    (store) => store.Movies
  );

  return (
    <>
      <NavBar>
        <Search />
        <NumResults />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loading />}

          {error && <Error />}
          {!isLoading && !error && <MovieList />}
        </Box>

        <Box>
          {select ? (
            <MovieDetails />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
