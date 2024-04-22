import { createSlice } from "@reduxjs/toolkit";

const initialFilter = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
