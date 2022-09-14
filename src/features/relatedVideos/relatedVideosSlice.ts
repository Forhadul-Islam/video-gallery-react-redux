import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Video } from "../../types";
import { getRelatedVideos } from "./relatedVideosAPI";

interface relatedVideosState {
  videos: Video[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: relatedVideosState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

interface IAsyncParameters {
  id: string | number;
  tags: string[];
}

//fetch related videos using id and tags
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags }: IAsyncParameters) => {
    const videos: Video[] = await getRelatedVideos(id, tags);
    return videos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state: relatedVideosState) => {
        state.videos = [];
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(
        fetchRelatedVideos.fulfilled,
        (state: relatedVideosState, action: PayloadAction<Video[]>) => {
          state.isLoading = false;
          state.videos = action.payload;
        }
      )
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
