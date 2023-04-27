import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import  authSelectors  from '../redux/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
