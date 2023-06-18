import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from "nanoid"; 
import { addContact, deleteContact, fetchContacts } from './operations';

const contactInitialState = {
    contact: [],
    isLoading: false,
    error: null,
    filter: ''
} ;

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    extraReducers:{
        [fetchContacts.pending](state){
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, {payload}){
            state.isLoading = false;
            state.error = null;
            state.contact=payload;
        },
        [fetchContacts.rejected](state, {payload}){
            state.isLoading = false;
            state.error = payload;
        },
        [addContact.pending](state){
            state.isLoading = true;
        },
        [addContact.fulfilled](state, {payload}){
            state.isLoading = false;
            state.error = null;
            state.contact.push(payload);
        },
        [addContact.rejected](state,{payload}){
            state.isLoading=false;
            state.error = payload;
        },
        [deleteContact.pending](state){
            state.isLoading=true;   
        },
        [deleteContact.fulfilled](state,{payload}){
            state.isLoading= false;
            state.error =null;
            const index = state.contact.findIndex(contact => contact.id === payload.id);
            state.contact.splice(index, 1);  
        },
    },
    reducers:{
        visibleContact: (state, { payload }) => {
            state.filter = payload;
       }
    },
}) 

export const contactReducer = contactsSlice.reducer;
export const {visibleContact} = contactsSlice.actions; 