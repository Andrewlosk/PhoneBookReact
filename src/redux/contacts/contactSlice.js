import {
  createSlice,
} from "@reduxjs/toolkit";

import { createEntityAdapter } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operations";

const contactsAdapter = createEntityAdapter();


const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
})


const contactSlice = createSlice({
  name: "contacts",
  initialState,



  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;


        contactsAdapter.setAll(
          state,
          action.payload.entities.contacts || {}
        );
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(addContact.fulfilled, (state, action) => {
   
        
        contactsAdapter.addOne(
          state,
          action.payload.entities.contacts[action.payload.result]
        );
      })


      .addCase(deleteContact.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload);
      })


  },
});

export const contactsReducer = contactSlice.reducer;

export const {
  selectAll: selectContacts,
  selectById: selectContactById,
  selectIds: selectContactIds,
} = contactsAdapter.getSelectors(
  (state) => state.contacts
);