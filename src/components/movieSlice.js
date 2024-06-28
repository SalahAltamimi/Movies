const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Api, Api2 } from "../service/Api";

export const MovieApi = createAsyncThunk(
  "Movie/MovieApi",
  async (query, { rejectWithValue }) => {
    try {
      if (query.length > 0) {
        const res = await Api(query);
        if (res.data.Response === "False") throw new Error(res.data?.Error);

        if (res.data) return res.data.Search;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    movies: tempMovieData,
    isLoading: false,
    error: "",
    watched: [],
  },
  reducers: {
    addWatched(state, action) {
      state.watched.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(MovieApi.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(MovieApi.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(MovieApi.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.movies = [];
      }),
});

export const { addWatched } = movieSlice.actions;
