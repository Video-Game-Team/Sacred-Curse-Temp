import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../navbar.css';

function Navbar() {
  return (
    <nav>
      <header>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default Navbar;
