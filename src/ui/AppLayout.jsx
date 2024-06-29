import { WatchedMoviesList } from "../components/WatchedMoviesList";
import { MovieList } from "../components/MovieList";
import { Box } from "../components/Box";
import { Main } from "../components/Main";
import { NumResults } from "../components/NumResults";
import { Search } from "../components/Search";
import { NavBar } from "../components/NavBar";
import { WatchedSummary } from "../components/WatchedSummary";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import MovieDetails from "../components/MovieDetails";

export default function AppLayout() {
  const { error, isLoading, watched } = useSelector(
    (store) => store.movieSlice
  );
  const { select, status, error2 } = useSelector((store) => store.moviesSlice);

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
            <>
              {status === "pending" && <Loading />}

              {error2 && <Error />}
              {status !== "pending" && !error2 && <MovieDetails />}
            </>
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
