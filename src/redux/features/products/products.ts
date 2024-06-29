import { TProduct, TProductsResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      TProductsResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) =>
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    }),
    getProductById: builder.query<TProduct, number>({
      query: (id) => `https://dummyjson.com/products/${id}`,
    }),
    // getCategories: builder.query<string[], void>({
    //   query: () => `products / categories`,
    // }),
    // updateProduct: builder.mutation<Product,{ id: number; product: Partial<Product> }>({
    //   query: ({ id, product }) => ({
    //     url: `products/${id}`,
    //     method: "PATCH",
    //     body: product,
    //   }),
    // }),
  }),
});
