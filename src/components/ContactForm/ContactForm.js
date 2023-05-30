import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactsAPI';

import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isSuccess, isError }] = useCreateContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact created successfully.');
    }
    if (isError) {
      toast.success('Something went wrong, please reload the page.');
    }
  }, [isSuccess, isError]);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumber = contacts.find(contact => contact.phone === phone);

    if (isContact) {
      toast.info(`${name} is already in contacts`);
      form.reset();
      return;
    } else if (isNumber) {
      toast.info(`Number ${phone} is already in contacts`);
      form.reset();
      return;
    } else {
      createContact({ name, phone });
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          placeholder="Enter number: xxx-xxx-xxxx"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
