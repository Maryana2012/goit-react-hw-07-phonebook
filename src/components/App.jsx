import React, { useEffect } from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from '../components/App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { contactsSelector } from "redux/selector";
import { fetchContacts } from "redux/operations";

export default function PhoneBook() {
  const dispatch = useDispatch();
  const {isLoading, error}=useSelector(contactsSelector);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  return (<>
    <h1 className={css.title}> PhoneBook</h1>
    <Form  /> 
    <div className={css.container}>
    <h2 className={css.subtitle}>Contacts</h2>
    {isLoading && <p>Loading tasks...</p>}
    {error && <p>{error}</p>}
    <Filter  />
    {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
    {/* {contact.length > 0 &&  <ContactList /> } */}
     <ContactList />
    </div> 
  </>)
}





