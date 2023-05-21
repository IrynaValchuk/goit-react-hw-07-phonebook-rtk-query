import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { ContactForm, ContactList, Filter } from 'components';
import { selectContacts } from 'redux/selectors';

import 'react-toastify/dist/ReactToastify.css';
import css from 'components/App/App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={css.info}>There are no contacts</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
};
