import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { useAuth } from '../../hooks/useAuth';
import { LogoutBtn, UserName, Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrap>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </Wrap>
  );
};

export default UserMenu;
