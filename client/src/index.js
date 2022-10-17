import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login.jsx';
// import ReLogin from './pages/ReLogin.jsx';
import Signup from './pages/Signup.jsx';
import NoPage from './pages/NoPage.jsx';
import PageRedirect from './pages/pageRedirect.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import './index.css';

//Main function Index
function Index(props) {
  //Login Redirect State
  const { loginRedirect, setLoginRedirect } = PageRedirect();

  // Disable React Dev Tools
  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }

  // Page refresh logic
  function refresh() {
    window.location.reload(false);
  }

  // Auth0 logic
  if (loginRedirect === true) {
    return <Navigate replace to="/game" />;
  }

  // Redirect back to home page when Login is pressed in NavBar
  function HomePage() {
    window.location.replace('http://localhost:3000/');
    return null;
  }

  // Return logic
  return (
    <Auth0Provider
      domain="dev-mvc8sgjt.us.auth0.com"
      clientId="nJ5yDrF0aizFClKKz3uFFI93A8zu02QQ"
      redirectUri={window.location.origin}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/game" element={<App />} />
            <Route path="*" element={<App />} />
          </Route>
        </Routes>
      </HashRouter>
    </Auth0Provider>
  );
}

//Export Logic
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Index />
);

export default Index;
