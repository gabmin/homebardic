import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Base {
  baseState: string;
}

const initialState: Base = {
  baseState: "전체",
};

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    selectedBase: (state, action: PayloadAction<string>) => {
      state.baseState = action.payload;
    },
  },
});

export const { selectedBase } = baseSlice.actions;
export default baseSlice;
