import { ContactForm } from '../components/form/ContactForm';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/list/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from '../components/loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <h2 style={{ marginLeft: 120, color: '#1976d2' }}>My Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
    </div>
  );
};

export default Contacts;
