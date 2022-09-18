import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

export const PhoneBook = ({ newContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const valueSubmit = e => {
    e.preventDefault();
    console.log(`Add ${name} tel: ${number}`);
    const newAdd = { name, number };
    newContact(newAdd);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const { form, label, input, addBtn } = styles;

  return (
    <form className={form} onSubmit={valueSubmit}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={label}>
        Number
        <input
          className={input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button className={addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

PhoneBook.propTypes = {
  newContact: PropTypes.func.isRequired,
};
