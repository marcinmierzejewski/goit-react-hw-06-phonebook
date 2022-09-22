import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import styles from './ContactItem.module.css'

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { contactItem, contactName, btn } = styles
  return (
    <li className={contactItem}>
      <span className={contactName}>{name}: {number}</span>{' '}
      <div>
        <a href={`tel:${number}`}><button className={btn}> Call</button></a>
        <button type="button" className={btn} onClick={() => {
          dispatch(deleteContact(id))}}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};