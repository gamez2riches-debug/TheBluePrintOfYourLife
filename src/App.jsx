import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <header className="hero">
        <h1 className="title">Build Your Financial Legacy</h1>
        <p className="subtitle">
          Your future wealth starts with your decisions today.  
          Discover your Financial IQ and unlock your personalized blueprint.
        </p>
        <a href="/quiz" className="cta-btn">Take the Financial IQ Quiz</a>
      </header>

      {/* BENEFITS SECTION */}
      <section className="benefits">
        <h2>Why Start Your Legacy?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">✔ Understand Your Money Personality</div>
          <div className="benefit-card">✔ Learn How to Build Long-Term Wealth</div>
          <div className="benefit-card">✔ Get a Personalized Legacy Strategy</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Financial Legacy Blueprint  
      </footer>
    </div>
  );
}

export default App;

