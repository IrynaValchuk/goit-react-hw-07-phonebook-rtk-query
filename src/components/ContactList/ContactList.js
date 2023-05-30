import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsAPI';
import { selectFilterValue } from 'redux/filterSlice';
import { Loader, ContactItem } from 'components';

export const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();

  const filter = useSelector(selectFilterValue);

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
      {filteredContacts &&
        filteredContacts.map(contact => {
          return <ContactItem key={contact.id} {...contact} />;
        })}
    </ul>
  );
};
