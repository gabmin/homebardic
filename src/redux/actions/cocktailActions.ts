import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../shared/axios";
import { CoktailInfo } from "../../types";

// 전체 보기
export const CocktailDB = createAsyncThunk("cocktail/cards", async () => {
  try {
    const response = await api.get(`/cocktail/cards`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 진 보기
export const JinDB = createAsyncThunk("cocktail/cards/jin", async () => {
  try {
    const response = await api.get(`/cocktail/cards/jin`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 보드카 보기
export const VodkaDB = createAsyncThunk("cocktail/cards/vodka", async () => {
  try {
    const response = await api.get(`/cocktail/cards/vodKa`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 럼 보기
export const RumDB = createAsyncThunk("cocktail/cards/rum", async () => {
  try {
    const response = await api.get(`/cocktail/cards/rum`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 위스키 보기
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

// 데킬라 보기
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

// 브랜디 보기
export const BrandyDB = createAsyncThunk("cocktail/cards/brandy", async () => {
  try {
    const response = await api.get(`/cocktail/cards/brandy`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 리큐어 보기
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

// 기타 보기
export const OthersDB = createAsyncThunk("cocktail/cards/others", async () => {
  try {
    const response = await api.get(`/cocktail/cards/others`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// 작성 하기
export const addCardDB = createAsyncThunk(
  "cocktail/cards/",
  async (data: CoktailInfo) => {
    try {
      const response = await api.post(`/cocktail/cards`, data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
