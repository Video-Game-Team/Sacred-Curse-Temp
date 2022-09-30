import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout';
import App from './App';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import NoPage from './pages/NoPage.jsx';

import './index.css';

export default function Index() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/game" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Index />
  </StrictMode>
);




// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';

// import App from './App';
// import './index.css';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

