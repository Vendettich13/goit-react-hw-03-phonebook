import {PropTypes} from "prop-types"

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
    return <>
        <p>{name} : {number}</p>
        <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
    </>
}

ContactItem.propTypes = {
    contact: PropTypes.object,
    onDelete: PropTypes.func,
}