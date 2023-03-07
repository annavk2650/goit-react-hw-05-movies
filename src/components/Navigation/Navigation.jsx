import React from 'react';
import { Nav, NaviLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <NaviLink to={'/'}>Home</NaviLink>
        <NaviLink to={'/movies'}>Movies</NaviLink>
      </Nav>
    </>
  );
};
