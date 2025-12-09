import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Discover Your Financial IQ & Build Your Generational Legacy</h1>
      <p>Leverage credit, invest smart, secure your family’s future.</p>
      <Link to="/quiz">
        <button className="primary-btn">Start Your Quiz</button>
      </Link>
    </div>
  );
}
