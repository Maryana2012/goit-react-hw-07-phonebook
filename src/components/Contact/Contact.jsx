import { useDispatch} from "react-redux";
import { deleteContact } from "redux/contactSlice";
import css from '../Contact/Contact.module.css';

export default function Contact({id,name, phone}) {
  const dispatch = useDispatch();
    
  // const handleDelete = () => dispatch(deleteContact(id));
    
    return (<li className={css.item} key={id}> {name}: {phone}
               <button type='button' 
              //  onClick={handleDelete}
               >delete</button></li>)
}




