import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { configSlice } from "./config/configSlice";

export const store = configureStore({
  reducer: { config: configSlice.reducer, auth: authSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
