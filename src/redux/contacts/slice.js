import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations.js";
import toast from "react-hot-toast";

const initialContacts = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  toast.error(`Error: ${action.payload}`);
};

const handleFetchContactsFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleEditContactFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.map((contact) => {
    if (contact.id === action.payload.id) {
      return action.payload;
    }
    return contact;
  });
};

const handleDeleteContactFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter(
    (contact) => contact.id !== action.payload.id
  );
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, handleEditContactFulfilled)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
