import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

import SharedLayout from './sharedLayout/Sharedlayout';
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
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
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
