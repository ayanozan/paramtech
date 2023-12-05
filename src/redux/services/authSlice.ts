import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  token: string;
  user: object;
  message: string;
};

const initialState = {
  value: {
    isAuth: false,
    token: "",
    user: {},
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_, action: PayloadAction<AuthState>) => {
      return {
        value: {
          isAuth: true,
          token: action.payload.token,
          user: action.payload.user,
          message: action.payload.message,
        },
      };
    },
  },
});

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  
  endpoints: (builder) => ({
    getLogin: builder.mutation<any, any>({
      query: (body) => ({
        url: "auth/sign-in",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetLoginMutation } = loginApi;

export const { logIn, logOut } = auth.actions;

export default auth.reducer;
