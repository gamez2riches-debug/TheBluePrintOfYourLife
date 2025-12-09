import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/quiz">Financial IQ Quiz</Link>
      </nav>
      <button onClick={toggleTheme}>
        Switch to {theme === 'family' ? 'Luxury' : 'Family'} Theme
      </button>
    </header>
  );
}
