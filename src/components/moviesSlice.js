import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

const initialState = {
  movie: {},
  select: null,
  status: "idle",
  error2: "",
};

export const moviesSlice = createSlice({
  name: "Movies",
  initialState,
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
      // .addCase(MovieApi2.pending, (state) => {
      //   // state.loading = true;
      //   // state.status = "pending";
      // })
      .addCase(MovieApi2.fulfilled, (state, action) => {
        state.status = "idle";
        state.movie = action.payload;
        state.error2 = "";
      })
      .addCase(MovieApi2.rejected, (state, action) => {
        state.status = "error";
        state.error2 = action.payload;
        state.movie = {};
      }),
});

export const { selectMovie, onClose } = moviesSlice.actions;
