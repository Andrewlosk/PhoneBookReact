import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://691c873e3aaeed735c913645.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts')

        
        return response.data
    } catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async(item, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', item)
        console.log(item);
        
        return response.data
    } catch(e){
        console.log(item);

        return thunkAPI.rejectWithValue(e.message)
    }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data
    } catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})