import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../components/movieSlice";
import { moviesSlice } from "../components/moviesSlice";

export const store = configureStore({
  reducer: {
    movieSlice: movieSlice.reducer,
    moviesSlice: moviesSlice.reducer,
  },
});
