import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../shared/axios";
import type { RootState } from "../store";
import { CoktailInfo } from "../../types";
import {
  CocktailDB,
  JinDB,
  VodkaDB,
  RumDB,
  WhiskeyDB,
  TequilaDB,
  BrandyDB,
  LiqueurDB,
  OthersDB,
  addCardDB,
} from "../actions/cocktailActions";

const initialState = {
  all: [],
  jin: [],
  vodka: [],
  rum: [],
  whiskey: [],
  tequila: [],
  brandy: [],
  liqueur: [],
  others: [],
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(CocktailDB.fulfilled, (state, action) => {
        state.all = action.payload;
      })
      .addCase(CocktailDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(JinDB.fulfilled, (state, action) => {
        state.jin = action.payload;
      })
      .addCase(JinDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(VodkaDB.fulfilled, (state, action) => {
        state.vodka = action.payload;
      })
      .addCase(VodkaDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(RumDB.fulfilled, (state, action) => {
        state.rum = action.payload;
      })
      .addCase(RumDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(WhiskeyDB.fulfilled, (state, action) => {
        state.whiskey = action.payload;
      })
      .addCase(WhiskeyDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(TequilaDB.fulfilled, (state, action) => {
        state.tequila = action.payload;
      })
      .addCase(TequilaDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(BrandyDB.fulfilled, (state, action) => {
        state.brandy = action.payload;
      })
      .addCase(BrandyDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(LiqueurDB.fulfilled, (state, action) => {
        state.liqueur = action.payload;
      })
      .addCase(LiqueurDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(OthersDB.fulfilled, (state, action) => {
        state.others = action.payload;
      })
      .addCase(OthersDB.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(addCardDB.fulfilled, (state, action) => {
        console.log(state);
      })
      .addCase(addCardDB.rejected, (state, action) => {
        console.log(action.error);
      }),
});

export default cocktailSlice;
