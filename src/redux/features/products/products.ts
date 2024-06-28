import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
    getProductCategories: builder.query({
      query: () => ({
        url: "products/categories",
        method: "GET",
      }),
    }),
  }),
});

// export const {
//   useAllProductQuery,
//   useGetProductDetailsQuery,
//   useGetProductCategoriesQuery,
// } = productApi;
