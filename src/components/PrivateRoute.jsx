import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import  authSelectors  from '../redux/auth/auth-selectors';


export default function PrivateRoute({
    children,
    redirectTo = '/',
  ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to={redirectTo} />}
    </Route>
  );
}
