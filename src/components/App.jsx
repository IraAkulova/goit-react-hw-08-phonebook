import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/Sharedlayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import NotFound from 'pages/NotFound';
import operations from '../redux/auth/auth-operations';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<RegisterView />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginView />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
};
