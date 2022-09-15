import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterState {
  tags: string[];
  search: string;
  page: number;
  postPerPage: number;
}

const initialState: filterState = {
  tags: [],
  search: "",
  page: 1,
  postPerPage: 4,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagAdded: (state: filterState, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state: filterState, action: PayloadAction<string>) => {
      const indexToBeRemoved = state.tags.indexOf(action.payload);
      if (indexToBeRemoved !== -1) {
        state.tags.splice(indexToBeRemoved, 1);
      }
    },
    searchAdded: (state: filterState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    resetFilter: (state: filterState) => {
      state.tags = [];
      state.search = "";
    },
    pageChanged: (state: filterState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagAdded, tagRemoved, searchAdded, resetFilter, pageChanged } =
  filterSlice.actions;
