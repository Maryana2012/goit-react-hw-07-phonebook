import { useDispatch, useSelector} from "react-redux";

import { contactsSelector } from "redux/selector";
import css from '../Form/Form.module.css'
import { addContact } from "redux/operations";

export default function Form() {

  const dispatch = useDispatch();
  const contact = useSelector(contactsSelector);


  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    if (contact.some(element => element.name.toLowerCase() === form.elements.name.value.toLowerCase())) {
        alert(`is already in contacts`);
    } else {
        const newUser = {
        name: form.elements.name.value, 
        phone: form.elements.phone.value
       }
       dispatch(addContact(newUser));
       }
    form.reset();
  }
  
  return (<form className={css.form__container} onSubmit={handleSubmit}>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Name</span> 
    <input className={css.input}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required/></label>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Number</span>
    <input className={css.input}
            type="tel"
            name="phone"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/></label>
    <button type="submit">Add contact</button>
  </form>)
}
