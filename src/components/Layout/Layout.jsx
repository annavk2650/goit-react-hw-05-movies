import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
