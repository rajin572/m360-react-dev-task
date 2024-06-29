import { TProduct, TProductsResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      TProductsResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      providesTags: ["products"],
    }),
    getProductById: builder.query<TProduct, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => `/products/categories`,
    }),
    updateProductData: builder.mutation<
      TProduct,
      { id: number; product: Partial<TProduct> }
    >({
      query: ({ id, product }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});
