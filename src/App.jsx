import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";

export default function App() {
  const [theme, setTheme] = useState("family");
  const [quizData, setQuizData] = useState({ answers: [], leadInfo: null, score: 0 });

  const toggleTheme = () => setTheme(theme === "family" ? "luxury" : "family");

  return (
    <div className={theme === "family" ? "family-bg" : "luxury-bg"}>
      <Router>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz setQuizData={setQuizData} />} />
            <Route path="/results" element={<Results leadInfo={quizData.leadInfo} answers={quizData.answers} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
