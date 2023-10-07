import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentPage = {
  currentPage: number;
};

const initialState: CurrentPage = {
  currentPage: 1,
};

type TotalCount = {
  totalCount: number;
}

type PayloadActionNext = {
  totalPages: number;
  nextCount: number;
}

const Pagination = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeNextPage(state, action: PayloadAction<PayloadActionNext>) {
      if (state.currentPage < action.payload.totalPages) {
        state.currentPage += action.payload.nextCount;
      }
      console.log(`всего страниц ${action.payload.totalPages}`)
      console.log(`текущая страница ${state.currentPage}`)
      
    },
    changePrevPage(state, action: PayloadAction<number>) {
      if (state.currentPage > 0) {
        state.currentPage -= action.payload;
      }
    },
  },
});

export const { changeCurrentPage, changeNextPage, changePrevPage } =
  Pagination.actions;
export default Pagination.reducer;
