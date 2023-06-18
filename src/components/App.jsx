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
  const {contact, isLoading, error}=useSelector(contactsSelector);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  return (<div className={css.container}>
    <h1 className={css.title}> PhoneBook</h1>
    <Form  /> 
    <h2 className={css.title}>Contacts</h2>
    {isLoading && <p>Loading tasks...</p>}
    {error && <p>{error}</p>}
    <Filter  />
    {contact !== [] &&  <ContactList /> }
    </div>)
}





