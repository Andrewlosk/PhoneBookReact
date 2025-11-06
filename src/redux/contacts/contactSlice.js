import { createSlice } from "@reduxjs/toolkit";
import {initialState} from '../constants'

const contactSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        deleteContact: {
            reducer(state, action) {
                return state.filter((contact) => contact.id !== action.payload)
            }
        }
    }
})

export const {addContact, deleteContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer