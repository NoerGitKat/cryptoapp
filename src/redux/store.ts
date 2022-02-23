import { configureStore } from "@reduxjs/toolkit";
import coinRankingAPI from "../services/cryptoAPI";

const store = configureStore({
  reducer: {
    [coinRankingAPI.reducerPath]: coinRankingAPI.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
