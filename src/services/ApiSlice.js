import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = [process.env.REACT_APP_API_BASE_URL];
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default apiSlice;
