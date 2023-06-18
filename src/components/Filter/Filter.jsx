import { useDispatch } from 'react-redux';
import { visibleContact } from 'redux/contactSlice';

import css from '../Filter/Filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();
    const handleFilter = (event)=> {dispatch(visibleContact(event.target.value))}

    return( <>
            <label htmlFor="" className={css.label}>Find contact by name </label>
            <input type="text" className={css.input}
                name="filter"
                onChange={handleFilter}
                />
        </>   
    )
}













