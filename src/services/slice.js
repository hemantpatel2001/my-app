import apiSlice from "./ApiSlice";

export const slice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    get: builder.query({
      providesTags: [""],
      query: () => {
        return {
          url: "",
          method: "GET",
        };
      },
    }),
    add: builder.mutation({
      providesTags: [""],
      query: (body) => {
        return {
          url: "",
          method: "POST",
          body,
        };
      },
    }),

    update: builder.mutation({
      providesTags: [""],
      query: ({ body, id }) => {
        return {
          url: `/${id} `,
          method: "PUT",
          body,
        };
      },
    }),

    getById: builder.query({
        providesTags: [""],
        query: (id) => {
          return {
            url: `/${id}`,
            method: "GET",
          };
        },
      }),

      deleteById: builder.mutation({
        invalidatesTags: ["accounts"],
        query: (id) => {
          return {
            url: `/${id}`,
            method: "DELETE",
          };
        },
      }),
  }),
});
