import { ContactItem } from "components/ContactItem/ContactItem"
import css from "../ContactList/ContactList.module.css"
import {PropTypes} from "prop-types"


export const ContactList = ({contacts, onDelete}) => {
    return <ul className={css.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><ContactItem contact={contact} onDelete={onDelete} /></li>
        })}
        
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.shape({}),
    onDelete: PropTypes.func,
}