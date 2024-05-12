import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  editContact,
  getContacts,
  newContact,
  removeContact,
} from "../../api/api.ts";

import {NewContactData, RemoveContactData, EditContactData} from "../../api/api.ts"


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await getContacts();
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}: NewContactData, thunkAPI) => {
    try {
      const res = await newContact({name, number});
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/editContact",
  async ({id, name, number}: EditContactData, thunkAPI) => {
    try {
      const res = await editContact({id, name, number});
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: RemoveContactData, thunkAPI) => {
    try {
      const res = await removeContact(id);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
