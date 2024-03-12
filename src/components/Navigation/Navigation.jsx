import { useAuth } from '../../hooks/useAuth';
import { NavLinkStyles } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkStyles to="/">PhoneBook </NavLinkStyles>
      {isLoggedIn && <NavLinkStyles to="/contacts">Contacts</NavLinkStyles>}
    </nav>
  );
};

export default Navigation;
