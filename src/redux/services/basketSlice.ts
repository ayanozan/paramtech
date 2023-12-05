import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackageState } from "@/redux/services/packagesSlice";

export type InitialState = {
  basketList: Array<PackageState>;
  basketListIds: Array<string>;
  totalAmount: number;
  currency: string;
};

export const initialState: InitialState = {
  basketList: [],
  basketListIds: [],
  totalAmount: 0,
  currency: "TRY",
};

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    handleAddOrRemovePackage: (state, action: PayloadAction<PackageState>) => {
      const existingPackageIndex = state.basketList.findIndex(
        (packageItem) => packageItem._id === action.payload._id
      );
      if (existingPackageIndex !== -1) {
        state.basketList.splice(existingPackageIndex, 1);
      } else state.basketList.push(action.payload);
      state.basketList = state.basketList;
      state.basketListIds = state.basketList.map((item) => item._id);
      state.totalAmount = state.basketList.reduce(
        (acc: number, item: PackageState) => (acc += item.price),
        0
      );
      localStorage.setItem("myBasket", JSON.stringify(state));
    },
  },
});

export const { handleAddOrRemovePackage } = basket.actions;

export default basket.reducer;
