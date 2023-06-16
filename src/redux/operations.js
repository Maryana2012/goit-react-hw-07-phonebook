import axios from "axios";
import { fetchingInProgress, fetchingSuccess,fetchingError } from "./contactSlice";

export const fetchContacts = () => async dispatch => {
    try{
        dispatch(fetchingInProgress());
        const response = await axios.get('https://648ce1bb8620b8bae7ed79fb.mockapi.io/contacts');
        dispatch(fetchingSuccess(response.data));
        console.log(response.data);
    }
    catch (error){
        dispatch(fetchingError(error.message))
        console.log(error)
    }
}