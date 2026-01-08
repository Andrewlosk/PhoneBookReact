import { normalize } from "normalizr";
import { contactsListSchema } from "./schemas";
import { constactSchema } from "./schemas";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://691c873e3aaeed735c913645.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const owner = state.auth?.user?.email;
      const url = owner ? `/contacts?owner=${encodeURIComponent(owner)}` : "/contacts";
      const response = await axios.get(url);

      const normalizedData = normalize(response.data, contactsListSchema);

      return normalizedData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (item, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const owner = state.auth?.user?.email || null;
      const itemWithOwner = { ...item, owner };
      const response = await axios.post("/contacts", itemWithOwner);

      const normalizedData = normalize(response.data, constactSchema);

      return normalizedData;
    } catch (e) {
      console.log(item);

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const contact = state.contacts.entities[id];
      const owner = state.auth?.user?.email || null;
      if (contact && contact.owner && contact.owner !== owner) {
        return thunkAPI.rejectWithValue("Not authorized to delete this contact");
      }
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
