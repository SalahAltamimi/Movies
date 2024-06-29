import { useDispatch } from "react-redux";
import { selectMovie } from "./moviesSlice";

export function Movie({ movie }) {
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(selectMovie(movie))}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
