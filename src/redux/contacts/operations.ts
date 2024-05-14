import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  editContact,
  getContacts,
  newContact,
  removeContact,
} from "../../api/api.ts";
import {addContactType, ContactType} from "../../types/contactTypes.ts";


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
  async ({name, number}: addContactType, thunkAPI) => {
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
  async ({id, name, number}: ContactType, thunkAPI) => {
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
  async (id: string, thunkAPI) => {
    try {
      const res = await removeContact({id});
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
