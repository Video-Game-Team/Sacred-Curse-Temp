import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import NoPage from './pages/NoPage.jsx';
import PageRedirect from './pages/pageRedirect.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import './index.css';


function Index(props) {

  //State
  const { loginRedirect, setLoginRedirect } = PageRedirect();
  const [downPass, setDownPass]= useState("original")


// Disable React Dev Tools
  // if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  // }

// Matt function in Index.js
  function subIDPass(SubIDAuth) {
    setDownPass(SubIDAuth);
  }

  // Page refresh logic    
  function refresh() {
    window.location.reload(false);
  } 

  // Auth0 logic
  if (loginRedirect === true) {
    return <Navigate replace to="/game" />;
  }

  // Retrun logic
  return (
    <Auth0Provider
      domain="dev-mvc8sgjt.us.auth0.com"
      clientId="nJ5yDrF0aizFClKKz3uFFI93A8zu02QQ"
      redirectUri={window.location.origin}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login subIDPasser={subIDPass} />} />
            <Route path="/login" element={<Login subIDPasser={subIDPass} />} />
            <Route path="/game" element={<App subIDAuth={downPass} />} />
            <Route path="*" element={<App subIDAuth={downPass} />} />
          </Route>
        </Routes>
      </HashRouter>
    </Auth0Provider>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Index />
);

export default Index;


