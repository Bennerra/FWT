import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sorting {
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
}

const initialState: Sortings = {
  sortingAuthors: {
    sorting: "",
    id: 0,
  },
  sortingLocations: {
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
    addSortingAuthors(state, action: PayloadAction<Sorting>) {
      state.sortingAuthors.sorting = action.payload.sorting;
      state.sortingAuthors.id = action.payload.id;
    },
    addSortingLocations(state, action: PayloadAction<Sorting>) {
      state.sortingLocations.sorting = action.payload.sorting;
      state.sortingLocations.id = action.payload.id;
    },
    addSortingFrom(state, action: PayloadAction<string>) {
      state.sortingCreated.from = action.payload;
    },
    addSortingBefore(state, action: PayloadAction<string>) {
      state.sortingCreated.before = action.payload;
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

export const {
  addSortingAuthors,
  addSortingLocations,
  deleteSorting,
  addSortingFrom,
  addSortingBefore,
} = SortingSlice.actions;
export default SortingSlice.reducer;
