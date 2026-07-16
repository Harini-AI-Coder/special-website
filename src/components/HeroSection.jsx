import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero-section ${visible ? 'hero-visible' : ''}`} id="hero">
      <div className="hero-bg-glow hero-glow-1" />
      <div className="hero-bg-glow hero-glow-2" />
      <div className="hero-bg-glow hero-glow-3" />

      {/* Decorative butterflies */}
      <div className="butterfly-ring" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="butterfly" style={{ '--bf-i': i }}>🦋</span>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-star">⭐</span>
          <span>A Special Day</span>
          <span className="badge-star">⭐</span>
        </div>

        <div className="hero-main-emoji">🎂</div>

        <h1 className="hero-heading">
          <span className="hero-heading-line1">Happy Birthday</span>
          <span className="hero-heading-line2">Jeev 💚</span>
        </h1>

        <div className="hero-divider">
          <span className="divider-heart">♥</span>
          <span className="divider-line" />
          <span className="divider-heart">♥</span>
          <span className="divider-line" />
          <span className="divider-heart">♥</span>
        </div>

        <p className="hero-message">
          On this magical day, I want you to know how incredibly special 
          you are to me. Every moment with you is a treasure.
          <br /><br />
          You are my world, my joy, my forever. 🌹
        </p>

        <div className="hero-balloons" aria-hidden="true">
          <span className="balloon" style={{ '--b': 0 }}>🎈</span>
          <span className="balloon" style={{ '--b': 1 }}>🎉</span>
          <span className="balloon" style={{ '--b': 2 }}>🎊</span>
          <span className="balloon" style={{ '--b': 3 }}>🎈</span>
          <span className="balloon" style={{ '--b': 4 }}>🎁</span>
        </div>

        <a href="#love-question" className="hero-scroll-btn">
          Scroll Down 💌
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
