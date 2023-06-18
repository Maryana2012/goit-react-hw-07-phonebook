import { useDispatch} from "react-redux";

import css from '../Contact/Contact.module.css';
import { deleteContact } from "redux/operations";

export default function Contact({id,name, phone}) {
  const dispatch = useDispatch();
    
  const handleDelete = () => dispatch(deleteContact(id));
    
    return (<li className={css.item} key={id}> <span className={css.item__text}>{name}: {phone}</span>
               <button type='button' onClick={handleDelete}>delete</button></li>)
}




