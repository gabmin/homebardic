import { configureStore, combineReducers } from "@reduxjs/toolkit";
import baseSlice from "./reducers/baseSlice";
import cocktailSlice from "./reducers/cocktailSlice";
import modalSlice from "./reducers/modal";

const rootReducer = combineReducers({
  base: baseSlice.reducer,
  card: cocktailSlice.reducer,
  modal: modalSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
