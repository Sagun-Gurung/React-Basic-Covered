import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../config/config";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8000",
    baseUrl: baseURL,
  }),
  tagTypes: ["readProducts", "readProductById"],

  // query and mutations

  endpoints: (builder) => ({
    readProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["readProducts"],
    }),

    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readProductById"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProducts"],
    }),

    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/products",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readProducts"],
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/products/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readProducts", "readProductById"],
    }),
  }),
});

export const {
  useReadProductsQuery,
  useDeleteProductMutation,
  useReadProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
