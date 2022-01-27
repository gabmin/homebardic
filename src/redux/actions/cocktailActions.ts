import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../shared/axios";

export const CocktailDB = createAsyncThunk("cocktail/cards", async () => {
  try {
    const response = await api.get(`/cocktail/cards/`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const JinDB = createAsyncThunk("cocktail/cards/jin", async () => {
  try {
    const response = await api.get(`/cocktail/cards/jin`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const VodkaDB = createAsyncThunk("cocktail/cards/vodka", async () => {
  try {
    const response = await api.get(`/cocktail/cards/vodKa`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const RumDB = createAsyncThunk("cocktail/cards/rum", async () => {
  try {
    const response = await api.get(`/cocktail/cards/rum`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const WhiskeyDB = createAsyncThunk(
  "cocktail/cards/whiskey",
  async () => {
    try {
      const response = await api.get(`/cocktail/cards/whiskey`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const TequilaDB = createAsyncThunk(
  "cocktail/cards/tequila",
  async () => {
    try {
      const response = await api.get(`/cocktail/cards/tequila`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const BrandyDB = createAsyncThunk("cocktail/cards/brandy", async () => {
  try {
    const response = await api.get(`/cocktail/cards/brandy`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const LiqueurDB = createAsyncThunk(
  "cocktail/cards/liqueur",
  async () => {
    try {
      const response = await api.get(`/cocktail/cards/liqueur`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const OthersDB = createAsyncThunk("cocktail/cards/others", async () => {
  try {
    const response = await api.get(`/cocktail/cards/others`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
