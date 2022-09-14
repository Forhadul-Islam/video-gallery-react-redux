import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video } from "../../types";
import { getVideo } from "./VideoAPI";

interface VideoState {
  video: Video | {};
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: VideoState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (videoId: string | number) => {
    const video = await getVideo(videoId);
    return video;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state: VideoState) => {
        state.isLoading = true;
        state.error = "";
        state.isError = false;
      })
      .addCase(
        fetchVideo.fulfilled,
        (state: VideoState, action: PayloadAction<Video>) => {
          state.isLoading = false;
          state.isError = false;
          state.error = "";
          state.video = action.payload;
        }
      )
      .addCase(fetchVideo.rejected, (state: VideoState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.video = {};
      });
  },
});

export default videoSlice.reducer;
