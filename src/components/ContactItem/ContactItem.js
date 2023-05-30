import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contactsAPI';

import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted successfully.');
    }
    if (isError) {
      toast.success('Something went wrong, please reload the page.');
    }
  }, [isSuccess, isError]);

  return (
    <li className={css.item}>
      <div className={css.box}>
        <span className={css.span}>{name}:</span>
        {phone}
      </div>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={css.btn}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
};
