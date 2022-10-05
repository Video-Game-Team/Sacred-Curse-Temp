import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import NoPage from './pages/NoPage.jsx';
import PageRedirect from './pages/pageReidrect.jsx';
import App from './App';

import './index.css';


function Index(props) {
  const { loginRedirect, setLoginRedirect } = PageRedirect();
  // console.log('LOOK AT ME INDEX.JS', loginRedirect);


  function refresh() {
    window.location.reload(false);
  } 

  if (loginRedirect === true) {
    return <Navigate replace to="/game" />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {/* <Route path="/login" element={<Navigate replace to="/game" />} /> */}
          <Route
            path="/login"
            element={
              loginRedirect === true ? (
                <Navigate replace to="/game" />
              ) : (
                <Login />
              )
            }
          />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<App />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

    <Index />
 
);


export default Index;
