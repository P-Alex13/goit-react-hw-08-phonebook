import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyles = styled(NavLink)`
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;

  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ff0d00;
  }

  &.active {
    color: white;
    background: linear-gradient(
      180deg,
      rgb(255, 13, 0) 0%, 
      rgba(0, 0, 0, 0.86) 100%);
    );
    box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  }

  @media screen and (min-width: 750px) {
    font-size: 20px;
  }
`;
