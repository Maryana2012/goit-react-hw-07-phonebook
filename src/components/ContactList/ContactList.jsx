import { useSelector } from "react-redux";
import { contactsSelector, filterSelector } from "redux/selector";
import Contact from "components/Contact/Contact";
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css'

export default function ContactList() {
  const filtered = useSelector(filterSelector)
  const contact = useSelector(contactsSelector);
  
  const filteredContacts=contact.filter(el=>el.name.toLowerCase().includes(filtered.toLowerCase()))
  
  return (<ul className={css.list}>
             {filteredContacts.map(element => <Contact key={element.id}
                id={element.id}
                name={element.name}
                phone={element.phone} /> )}
           </ul>)
}

ContactList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }
