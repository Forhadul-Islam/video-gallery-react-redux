import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterState {
  tags: string[];
  search: string;
}

const initialState: filterState = {
  tags: [],
  search: "",
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
  },
});

export default filterSlice.reducer;
export const { tagAdded, tagRemoved, searchAdded } = filterSlice.actions;
