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

export default function AppLayout() {
  const { error, isLoading, select, watched } = useSelector(
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
