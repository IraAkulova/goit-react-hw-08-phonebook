import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import authSelectors from 'redux/auth/auth-selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const visibleContacts = useSelector(getVisibleContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {isLoggedIn && visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  value: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
