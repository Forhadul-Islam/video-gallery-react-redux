import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "../features/tags/tagsSlice";
import videosReducer from "../features/videos/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
