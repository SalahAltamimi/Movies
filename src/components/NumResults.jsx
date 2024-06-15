import { useSelector } from "react-redux";

export function NumResults() {
  const { movies, error } = useSelector((store) => store.Movies);

  return (
    <p className="num-results">
      Found <strong>{movies?.length ? movies?.length : 0}</strong> results
    </p>
  );
}
