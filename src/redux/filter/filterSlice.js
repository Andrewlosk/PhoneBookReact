import { createSlice } from "@reduxjs/toolkit";
import {initialState} from '../constants'

const filterSlice = createSlice({
    name: "contacts",
    initialState: initialState.filter,
    reducers: {
        findContact: {
            reducer(state, action) {
                return state = action.payload
            }
        },

    }
})

export const {findContact} = filterSlice.actions;
export const filterReducer = filterSlice.reducer