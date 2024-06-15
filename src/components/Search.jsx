import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MovieApi } from "../store/store";

export function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(MovieApi(query));
    },
    [query, dispatch]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
