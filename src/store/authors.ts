import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IAuthor } from "../models/IAuthor";

export const authorsApi = createApi({
  reducerPath: "authorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getAuthors: build.query<IAuthor[], void>({
      query: () => ({
        url: "/authors",
      }),
    }),
  }),
});

export const { useGetAuthorsQuery } = authorsApi;
