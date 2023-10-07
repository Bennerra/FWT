import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ILocation } from "../models/ILocation";

export const locationsApi = createApi({
  reducerPath: "locationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getLocations: build.query<ILocation[], void>({
      query: () => ({
        url: "/locations",
      }),
    }),
  }),
});

export const { useGetLocationsQuery } = locationsApi;
