import { useSelector } from "react-redux";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  const { error } = useSelector((store) => store.movieSlice);

  if (error) return <div className="error">💥 {error}</div>;
  if (err?.message)
    return <div className="error">💥 {err.message || err.data}</div>;

  return <div className="error">💥 Page not found</div>;
}

export default Error;
