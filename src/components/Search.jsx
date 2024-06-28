import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MovieApi } from "./movieSlice";

export function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(
    function () {
      if (query.length > 0) dispatch(MovieApi(query));
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
