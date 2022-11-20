import { ContactsList } from 'components/Phonebook/ContactsList';
import { Filter } from 'components/Phonebook/Filter';
import { FormAddContact } from 'components/Phonebook/FormAddContact';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.section}>
        <h1 className={css.title}>PHONEBOOK</h1>

        <FormAddContact />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
