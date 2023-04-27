import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './SharedLayout.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import { UserMenu } from 'components/UserMenu';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>}
        {isLoggedIn ? (<UserMenu/>
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
