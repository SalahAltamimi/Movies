import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Api2 } from "../service/Api";

export const MovieApi2 = createAsyncThunk(
  "Movie/MovieApi2",
  async (select, { rejectWithValue }) => {
    try {
      const res = await Api2(select);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.data);
    }
  }
);

export const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    movie: {},
    select: null,
    isLoading2: false,
    error2: "",
  },
  reducers: {
    selectMovie(state, action) {
      state.select =
        state.select?.imdbID === action.payload.imdbID ? null : action.payload;
    },
    onClose(state) {
      state.select = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(MovieApi2.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isLoading2 = false;
        state.error2 = "";
      })
      .addCase(MovieApi2.rejected, (state, action) => {
        state.error2 = action.payload;
        state.isLoading2 = false;
        state.movie = {};
      }),
});

export const { selectMovie, onClose } = moviesSlice.actions;
