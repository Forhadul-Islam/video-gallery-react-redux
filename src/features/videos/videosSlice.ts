import {
  AsyncThunk,
  AsyncThunkPayloadCreatorReturnValue,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Video } from "../../types";
import { getVideos } from "./videosAPI";

interface VideosState {
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: VideosState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

interface IAsyncParameteres {
  tags: string[];
  search: string;
}

//fetch videos
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }: IAsyncParameteres) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state: VideosState) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(
        fetchVideos.fulfilled,
        (state: VideosState, action: PayloadAction<Video[]>) => {
          state.isLoading = false;
          state.videos = action.payload;
        }
      )
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
