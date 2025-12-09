import React, { useState } from 'react';
import LeadForm from './LeadForm.jsx';

const questions = [
  { question: "Do you track your monthly income vs expenses?", options: [{ text: "Yes", score: 3 },{ text: "Sometimes", score: 2 },{ text: "No", score: 1 }] },
  { question: "Do you have a debt repayment plan?", options: [{ text: "Yes", score: 3 },{ text: "Partially", score: 2 },{ text: "No", score: 1 }] },
  { question: "Have you considered using other people’s money to invest?", options: [{ text: "Yes", score: 3 },{ text: "Thinking", score: 2 },{ text: "Never", score: 1 }] },
];

export default function Quiz({ setQuizData }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);
    if (current < questions.length - 1) setCurrent(current + 1);
    else setShowLeadForm(true);
  };

  return (
    <div className="quiz-container">
      {!showLeadForm ? (
        <div>
          <h2>Financial IQ Quiz</h2>
          <p>{questions[current].question}</p>
          {questions[current].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt.score)}>{opt.text}</button>
          ))}
          <p>Question {current + 1} of {questions.length}</p>
        </div>
      ) : (
        <LeadForm answers={answers} setQuizData={setQuizData} />
      )}
    </div>
  );
}
