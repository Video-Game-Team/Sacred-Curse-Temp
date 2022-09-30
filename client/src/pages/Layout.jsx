import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  Navigate
} from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
