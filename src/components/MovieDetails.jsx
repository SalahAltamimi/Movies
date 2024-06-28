import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatched } from "./movieSlice";
import StrasRating from "./StrasRating";
import { MovieApi2, onClose } from "./moviesSlice";

function MovieDetails() {
  const { watched } = useSelector((store) => store.movieSlice);
  const { select, movie } = useSelector((store) => store.moviesSlice);
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(MovieApi2(select.imdbID));
    },
    [select, dispatch]
  );

  const isRating = watched.map((el) => el.imdbID).includes(select.imdbID);
  const userRating = watched.find((el) => el.imdbID === select.imdbID);
  useEffect(
    function () {
      const x = (e) => {
        if (e.code === "Escape") dispatch(onClose());
      };
      document.addEventListener("keydown", x);
      return () => document.removeEventListener("keydown", x);
    },
    [dispatch]
  );

  const [avgRating, setrate] = useState(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  useEffect(
    function () {
      if (movie.Title) document.title = movie.Title;
      return () => (document.title = "usePopcorn");
    },
    [movie.Title]
  );

  function handelsubmit(e) {
    e.preventDefault();
    const newwatch = {
      Poster: poster,
      imdbID: select.imdbID,
      Title: title,
      imdbRating,
      userRating: avgRating,
      runtime,
    };
    dispatch(addWatched(newwatch));
    dispatch(onClose());
  }
  return (
    <div className="details">
      <>
        <header>
          <button className="btn-back" onClick={() => dispatch(onClose())}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of  movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </header>

        <section>
          <div className="rating">
            {isRating ? (
              <p>
                You rated with movie {userRating?.userRating} <span>⭐️</span>
              </p>
            ) : (
              <StrasRating avgRating={avgRating} setrate={setrate} />
            )}
            {avgRating > 0 && (
              <button className="btn-add" onClick={handelsubmit}>
                + Add to list
              </button>
            )}
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    </div>
  );
}

export default MovieDetails;
