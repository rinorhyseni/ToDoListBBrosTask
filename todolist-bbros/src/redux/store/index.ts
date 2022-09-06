import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { doneConstantSlice } from "../slices/doneConstantSlice";
import { inProgressConstantSlice } from "../slices/inProgressConstantSlice";
import { userConstantSlice } from "../slices/userConstanSlice";

export const store = configureStore({
  reducer: combineReducers({
    tasks: doneConstantSlice.reducer,
    users: userConstantSlice.reducer,
  }),
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;