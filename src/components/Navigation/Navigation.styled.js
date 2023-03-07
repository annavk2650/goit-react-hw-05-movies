import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 20px auto 0;
  text-align: start;
  background-color: #527c82;
  border-radius: 8px;
  box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px, inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
`;

export const NaviLink = styled(NavLink)`
  display: inline-block;
  padding: 15px 20px;
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: #e3f309cb;
  }
`;
