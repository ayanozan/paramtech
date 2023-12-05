import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export type PackageState = {
  _id: string;
  currency: string;
  details: Array<string>;
  imagePath: string;
  moreInformation: string;
  name: string;
  price: number;
  tags: Array<string>;
};

type InitialState = {
  allPackages: Array<PackageState>;
  package: PackageState;
};

const initialState = {
  allPackages: [],
  package: {},
};

export const getTokenFromCookie = () => {
  return getCookie("token");
};

export const getPackages = createSlice({
  name: "getPackages",
  initialState,
  reducers: {
    selectForDetail: (state, action: PayloadAction<PackageState>) => {
      state.package = action.payload;
    },
  },
});

export const packageApi = createApi({
  reducerPath: "packageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPackage: builder.query<InitialState, string>({
      query: () => ({
        url: "packages",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getTokenFromCookie()}`,
        },
      }),
    }),
  }),
});

export const { useGetPackageQuery } = packageApi;

export const { selectForDetail } = getPackages.actions;

export default getPackages.reducer;
