import { ToastContainer } from 'react-toastify';
import { useGetContactsQuery } from 'redux/contactsAPI';
import { ContactForm, ContactList, Filter, Loader } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import css from 'components/App/App.module.css';

export const App = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading ? (
        <Loader />
      ) : contacts.length === 0 ? (
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
