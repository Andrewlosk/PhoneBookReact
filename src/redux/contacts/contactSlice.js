import { createSlice, isPending, isRejected , isFulfilled} from "@reduxjs/toolkit";
// import { initialState } from "../constants";

import { fetchContacts, addContact, deleteContact } from "../operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },

  // initialState: initialState.contacts,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {

        
        state.items = action.payload;

      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        const filterArrayOfContacts = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.items = filterArrayOfContacts;
      })

      

      .addMatcher(isPending(fetchContacts, addContact, deleteContact), (state) => {
        state.isLoading = true;
      })

      .addMatcher(isRejected(fetchContacts, addContact, deleteContact), (state, action) => {
        state.error = action.payload;
      })


      .addMatcher(
        isFulfilled(fetchContacts, addContact),
        (state) => {
        state.isLoading = false;
        state.error = null
        }
      )
  },


});

export const contactsReducer = contactSlice.reducer;
