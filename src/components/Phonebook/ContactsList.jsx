import { useDispatch, useSelector } from 'react-redux';
import {
  getFilteredContacts,
  selectAllContacts,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(state => getFilteredContacts(items, filter));

  const onRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  if (contacts) {
    const elements = contacts.map(({ name, id, number }) => {
      return (
        <li className={css.ContactList__item} key={id}>
          <span className={css.ContactList__text}>
            {name}: {number}
          </span>
          <button
            className={css.ContactList__button}
            type="button"
            onClick={() => onRemoveContact(id)}
            disabled={isLoading}
          >
            Delete
          </button>
        </li>
      );
    });

    return <ul className={css.ContactList__list}>{elements}</ul>;
  }
};
