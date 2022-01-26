import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../shared/axios";
import type { RootState } from "../store";
import { CoktailInfo } from "../../types";
import { CocktailDB } from "../actions/cocktailActions";

const initialState: CoktailInfo = {
  card: {
    name: "",
    base: "",
    ingredient: [],
    method: "",
    glass: "",
    description: "",
  },
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(CocktailDB.fulfilled, (state, { payload }) => {
        state.card = payload;
      })
      .addCase(CocktailDB.rejected, (state, action) => {
        console.log(action.error);
      }),
});

export default cocktailSlice;
