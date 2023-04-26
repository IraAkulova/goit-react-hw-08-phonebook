import { Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import css from './SharedLayout.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import operations from 'redux/auth/auth-operations';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
        {isLoggedIn ? (
          <div style={{display: 'flex'}}>
            <p>Welcome, {name}!</p>
            <button type="button" onClick={() => dispatch(operations.logOut())}>
              Log out
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/register" className={css.link}>
              Registration
            </NavLink>
            <NavLink to="/login" className={css.link}>
              Login
            </NavLink>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
