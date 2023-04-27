import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import  authSelectors  from '../redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Navigate to={redirectTo} /> : children}
    </Route>
  );
}
