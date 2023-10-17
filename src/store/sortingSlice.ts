import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sorting {
  typeSorting: string;
  sorting: string;
  id: number;
}

interface SortingCreated {
  from: string;
  before: string;
}

interface Sortings {
  sortingAuthors: Sorting;
  sortingLocations: Sorting;
  sortingCreated: SortingCreated;
  [key: string]: any;
}

const initialState: Sortings = {
  sortingAuthors: {
    typeSorting: "",
    sorting: "",
    id: 0,
  },
  sortingLocations: {
    typeSorting: "",
    sorting: "",
    id: 0,
  },
  sortingCreated: {
    from: "",
    before: "",
  },
};

const SortingSlice = createSlice({
  name: "sortingSlice",
  initialState,
  reducers: {
    addSorting(state, action: PayloadAction<Sorting>) {
      state[action.payload.typeSorting].sorting = action.payload.sorting;
      state[action.payload.typeSorting].id = action.payload.id;
    },
    addSortingCreated(state, action: PayloadAction<SortingCreated>) {
      state.sortingCreated.from = action.payload.from;
      state.sortingCreated.before = action.payload.before;
    },
    deleteSorting(
      state,
      action: PayloadAction<"sortingAuthors" | "sortingLocations">
    ) {
      state[action.payload].sorting = "";
      state[action.payload].id = 0;
    },
  },
});

export const { addSorting, deleteSorting, addSortingCreated } =
  SortingSlice.actions;
export default SortingSlice.reducer;
