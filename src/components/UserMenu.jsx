import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import operations from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={{ display: 'flex' }}>
      <p>Welcome, {name}!</p>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Log out
      </button>
    </div>
  );
};
