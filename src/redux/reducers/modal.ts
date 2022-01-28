import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalInfo {
  modalState: boolean;
}

const initialState: ModalInfo = {
  modalState: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    selectedModal: (state, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
  },
});

export const { selectedModal } = modalSlice.actions;
export default modalSlice;
