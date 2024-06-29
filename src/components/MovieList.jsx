import { useSelector } from "react-redux";
import { Movie } from "./Movie";

export function MovieList() {
  const { movies } = useSelector((store) => store.movieSlice);

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
