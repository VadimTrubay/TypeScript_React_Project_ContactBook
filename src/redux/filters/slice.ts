import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filterType} from "../../types/filterTypes.js";

const initialFilter: filterType = {
  name: '',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilter,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const {changeFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
