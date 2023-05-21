import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Loader } from 'components';
import {
  selectContacts,
  selectFilterValue,
  selectIsLoading,
} from 'redux/selectors';

import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {isLoading && <Loader />}
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <div key={id} className={css.container}>
            <li className={css.item}>
              <span className={css.span}>{name}: </span>
              {phone}
            </li>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btn}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};
