import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import authReducer from "./services/authSlice";
import basketReducer from "./services/basketSlice";

import { loginApi } from "./services/authSlice";
import { packageApi } from "./services/packagesSlice";
import { patmentApi } from "./services/checkout";

export const store = configureStore({
  reducer: {
    authReducer,
    basketReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [packageApi.reducerPath]: packageApi.reducer,
    [patmentApi.reducerPath]: patmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginApi.middleware,
      packageApi.middleware,
      patmentApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
