import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./operations.ts";
import toast from "react-hot-toast";
import {initialContactsType, ContactType} from "../../types/contactTypes.ts";

const initialContacts: initialContactsType = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

const handlePending = (state: initialContactsType) => {
  state.loading = true;
};

const handleRejected = (
  state: initialContactsType,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = action.payload;
  toast.error(`Error: ${action.payload}`);
};

const handleFetchContactsFulfilled = (
  state: initialContactsType,
  action: PayloadAction<ContactType[]>
) => {
  state.loading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContactFulfilled = (
  state: initialContactsType,
  action: PayloadAction<ContactType>
) => {
  state.loading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleEditContactFulfilled = (
  state: initialContactsType,
  action: PayloadAction<ContactType>
) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.map((contact) =>
    contact.id === action.payload.id ? action.payload : contact
  );
};

const handleDeleteContactFulfilled = (
  state: initialContactsType,
  action: PayloadAction<string>
) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter((contact) => contact.id !== action.payload);
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {},
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
