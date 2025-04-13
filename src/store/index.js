
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/ButtonViaMain";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

