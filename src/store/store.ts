import { configureStore } from "@reduxjs/toolkit";
import { paintingsApi } from "./paintings";
import { authorsApi } from "./authors";
import { locationsApi } from "./locations";
import paginationReducer from "./paginationSlice";
import sortingReducer from "./sortingSlice";

export const store = configureStore({
  reducer: {
    [paintingsApi.reducerPath]: paintingsApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    pagination: paginationReducer,
    sortings: sortingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      paintingsApi.middleware,
      authorsApi.middleware,
      locationsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
