import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/operations';
import { getItems } from '../../redux/contacts-selectors';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = function () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(contactsOperations.addContact(name, number));

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isAlreadyInContacts = items.some(item => item.name === name);

    if (isAlreadyInContacts) {
      resetState();
      return alert(`${name} is already in contacts`);
    } else {
      resetState();
      return onSubmit(name, number);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button
        className={styles.btn}
        type="submit"
        disabled={!(name && number) && true}
      >
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
