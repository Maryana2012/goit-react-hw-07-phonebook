import axios from "axios";
// import { fetchingInProgress, fetchingSuccess,fetchingError } from "./contactSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchContacts = () => async dispatch => {
//     try{
//         dispatch(fetchingInProgress());
//         const response = await axios.get('https://648ce1bb8620b8bae7ed79fb.mockapi.io/contacts');
//         dispatch(fetchingSuccess(response.data));
//         console.log(response.data);
//     }
//     catch (error){
//         dispatch(fetchingError(error.message))
//         console.log(error)
//     }
// }

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async (_, thunkAPI)=> {
    try{
        const response = await axios.get('https://648ce1bb8620b8bae7ed79fb.mockapi.io/contacts');
        return response.data;
   } catch (error){
    return thunkAPI.rejectWithValue(error.message);
   }
})

export const addContact= createAsyncThunk('contacts/addContact', 
async ({name, phone}, thunkAPI)=>{
    try{
        const response = await axios.post('https://648ce1bb8620b8bae7ed79fb.mockapi.io/contacts', {name, phone});
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

export const deleteContact = createAsyncThunk('contacts/deleteContact',
async (id, thunkAPI) => {
    try{
        const response = await axios.delete(`https://648ce1bb8620b8bae7ed79fb.mockapi.io/contacts/${id}`)
        return response.data;
    } catch (error){
        return thunkAPI.rejectWithValue(error.message);
    }
})