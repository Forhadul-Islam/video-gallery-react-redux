import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { Tag } from "../../types";
import { getTags } from "./tagsAPI";

interface TagsState {
  tags: Tag[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: TagsState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

//fetch tags
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const tagsSlice: Slice<TagsState, {}, "tags"> = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TagsState>) => {
    builder
      .addCase(fetchTags.pending, (state: TagsState) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        fetchTags.fulfilled,
        (state: TagsState, action: PayloadAction<Tag[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.error = "";
          state.tags = action.payload;
        }
      )
      .addCase(fetchTags.rejected, (state: TagsState, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
