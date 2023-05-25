import { configureStore } from "@reduxjs/toolkit";
import shoppingcartRedcuer from "../features/shoppingcart/shoppingcartSlice";

export const store = configureStore({
  reducer: { shoppingcart: shoppingcartRedcuer },
});