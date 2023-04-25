import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
        <NavLink to="/register" className={css.link}>
          Registration
        </NavLink>
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
