import React, { useState } from 'react';
import Results from './Results.jsx';

export default function LeadForm({ answers, setQuizData }) {
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = answers.reduce((acc, val) => acc + val, 0);
    setQuizData({ answers, leadInfo, score });
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h3>Almost done! Enter your info to see your results:</h3>
          <input name="name" placeholder="Name" onChange={handleChange} required /><br/><br/>
          <input name="email" placeholder="Email" onChange={handleChange} required /><br/><br/>
          <input name="phone" placeholder="Phone" onChange={handleChange} /><br/><br/>
          <button type="submit">See Your Results</button>
        </form>
      ) : (
        <Results leadInfo={leadInfo} answers={answers} />
      )}
    </div>
  );
}
