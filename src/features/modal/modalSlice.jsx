import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModel, closeModal } = modelSlice.actions;
export default modelSlice.reducer;
