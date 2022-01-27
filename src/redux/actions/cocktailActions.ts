import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../shared/axios";

export const CocktailDB = createAsyncThunk(
  "cocktail/cards",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cocktail/cards`);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// export const PostDB = createAsyncThunk(
//   "eitherPost/PostDB",
//   async (eitherId, { rejectWithValue }) => {
//     try {
//       const response = await api.get(`/posts/either/${eitherId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );
