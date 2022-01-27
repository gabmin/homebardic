import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../shared/axios";
import type { RootState } from "../store";
import { CoktailInfo } from "../../types";
import { CocktailDB } from "../actions/cocktailActions";

const initialState = {
  manual: [],
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(CocktailDB.fulfilled, (state, action) => {
        state.manual = action.payload;
      })
      .addCase(CocktailDB.rejected, (state, action) => {
        console.log(action.error);
      }),
});

export default cocktailSlice;
