import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid"; 

const contactInitialState = {
    contact: [],
    isLoading: false,
    error: null,
    filter: ''
} ;

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers:{
        fetchingInProgress (state){
            state.isLoading = true;
        },
        fetchingSuccess(state, {payload}){
            state.isLoading = true;
            state.error = null;
            state.contact=payload;

        },
        fetchingError(state, {payload}){
            state.isLoading = true;
            state.error = payload;
        },
        visibleContact: (state, { payload }) => {
            state.filter = payload;
       }
    }
}) 

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, { payload }) {state.contact.push(payload)},
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         userName: name,
//                         userNumber: number
//                     }
//                 }
//             }
//         },
//         deleteContact:(state, {payload}) => {
//            const index = state.contact.findIndex(contact => contact.id === payload);
//            state.contact.splice(index, 1);
//         },
    //     visibleContact: (state, { payload }) => {
    //         state.filter = payload;
    //    }
//     }
// })

export const contactReducer = contactsSlice.reducer;
export const {fetchingInProgress, fetchingSuccess, fetchingError,visibleContact} = contactsSlice.actions; 