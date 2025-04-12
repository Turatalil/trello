import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { buttonViaMainSlice } from "./slices/ButtonViaMain";

const rootSlices = combineSlices({
    basket: buttonViaMainSlice.reducer
})

export const store = configureStore({reducer: rootSlices})