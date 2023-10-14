import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortingsArr = {
  sorting: string;
  id: number;
};

const initialState: SortingsArr = {
  sorting: "",
  id: 0,
};

const Sorting = createSlice({
  name: "sortingSlice",
  initialState,
  reducers: {
    addSorting(state, action: PayloadAction<SortingsArr>) {
      state.sorting = action.payload.sorting;
      state.id = action.payload.id;
    },
    deleteSorting(state) {
      state.sorting = "";
      state.id = 0;
    },
  },
});

export const { addSorting, deleteSorting } = Sorting.actions;
export default Sorting.reducer;
