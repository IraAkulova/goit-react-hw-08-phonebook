// import { ContactForm } from './form/ContactForm';
// import { Filter } from './filter/Filter';
// import { ContactList } from './list/ContactList';

import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
import SharedLayout from './sharedLayout/Sharedlayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import NotFound from 'pages/NotFound';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  
  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          {/* <Route path="logout" element={<LogoutView />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
    // <div className={css.container}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList />
    // </div>
  );
  }
