import React from 'react';

export default function Results({ leadInfo, answers }) {
  const score = answers.reduce((acc, val) => acc + val, 0);
  let message = "";

  if (score <= 4) message = "Financial Novice: Start building your credit & wealth today!";
  else if (score <= 6) message = "Emerging Wealth Builder: You’re on your way — here’s the next steps!";
  else message = "Legacy Architect: Maximize your generational wealth now!";

  return (
    <div className="results-container">
      <h2>Congratulations, {leadInfo.name}!</h2>
      <p>Your Financial IQ Score: {score}</p>
      <p>{message}</p>
      <button onClick={() => alert("Next Step: Book a Call or Start Your Legacy Account")}>
        Start Your Legacy Account
      </button>
    </div>
  );
}
