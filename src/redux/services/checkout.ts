import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const getTokenFromCookie = () => {
  return getCookie("token");
};

export const patmentApi = createApi({
  reducerPath: "patmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPayment: builder.query<any, string>({
      query: () => ({
        url: "payment",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      }),
    }),
    postCheckout: builder.mutation<any, any>({
      query: (body) => ({
        url: "payment",
        method: "POST",
        headers: {
            Authorization: `Bearer ${getTokenFromCookie()}`,
          },
        body,
      }),
    }),
  }),
});

export const { useGetPaymentQuery, usePostCheckoutMutation } = patmentApi;
