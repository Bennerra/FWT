import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentPage = {
  currentPage: number;
};

const initialState: CurrentPage = {
  currentPage: 1,
};

const Pagination = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeNextPage(state, action: PayloadAction<number>) {
      if (state.currentPage < action.payload) {
        state.currentPage += 1;
      }
    },
    changePrevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    changePrevDoublePage(state) {
      state.currentPage = 1;
    },
    changeNextDoublePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  changeCurrentPage,
  changeNextPage,
  changePrevPage,
  changePrevDoublePage,
  changeNextDoublePage,
} = Pagination.actions;
export default Pagination.reducer;
