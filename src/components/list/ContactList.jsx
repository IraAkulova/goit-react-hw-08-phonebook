import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import authSelectors from 'redux/auth/auth-selectors';
import { List, ListItem, Button } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const visibleContacts = useSelector(getVisibleContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {isLoggedIn &&
        visibleContacts.map(contact => (
          <ListItem key={contact.id} sx={{display: 'flex', justifyContent: 'space-between', maxWidth: 400, fontWeight: 500}}>
            {contact.name}: {contact.number}
            <Button
              variant="contained"
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
              sx={{
                ml: 5,
                maxWidth: '300px',
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  value: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
