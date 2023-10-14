import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPainting } from "../models/IPainting";

export const paintingsApi = createApi({
  reducerPath: "paintingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    getPaintings: build.query<
      { data: IPainting[]; totalCount: number },
      {
        _limit: number;
        _page: number;
        q: string;
        authorId?: number | undefined;
      }
    >({
      query: ({ _limit, _page, q, authorId }) => ({
        url: `/paintings?`,
        params: {
          _limit,
          _page,
          q,
          authorId,
        },
      }),
      transformResponse: (
        data,
        meta
      ): { data: IPainting[]; totalCount: number } => {
        return {
          data: data as IPainting[],
          totalCount: meta?.response
            ? Number(meta.response.headers.get("X-Total-Count"))
            : 0,
        };
      },
    }),
  }),
});

export const { useGetPaintingsQuery } = paintingsApi;
