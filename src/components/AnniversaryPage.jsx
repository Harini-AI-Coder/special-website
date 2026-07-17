import React, { useEffect, useRef } from 'react';
import './AnniversaryPage.css';

const HEARTS = ['❤️', '💚', '💙', '💕', '💖', '💗', '💝'];

const AnniversaryPage = ({ onExploreMore }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawn = () => {
      const heart = document.createElement('span');
      heart.className = 'anv-floating-heart';
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      const size = 1 + Math.random() * 1.5;
      const startX = Math.random() * 100;
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;
      heart.style.cssText = `
        left: ${startX}%;
        font-size: ${size}rem;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), (duration + delay) * 1000 + 500);
    };

    const interval = setInterval(spawn, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="anv-section">
      {/* Floating hearts layer */}
      <div className="anv-hearts-layer" ref={containerRef} />

      {/* Central content */}
      <div className="anv-content animate-fade-in">

        <h1 className="anv-title">
          <span className="anv-title-line1">Happy</span>
          <span className="anv-title-line2">2<sup>nd</sup> Love</span>
          <span className="anv-title-line3">Anniversary</span>
          <span className="anv-title-hearts">💚💙</span>
        </h1>

        <p className="anv-wish">
          Two years of laughing, growing, and loving — every moment with you is
          a treasure I hold close to my heart. Here's to forever, my love. 💚
        </p>

        <div className="anv-jh">
          <span>J</span>
          <span className="anv-jh-heart">💚</span>
          <span>H</span>
        </div>

        <button
          className="anv-explore-btn"
          id="explore-more-btn"
          onClick={onExploreMore}
        >
          Explore Our Journey 💌
        </button>
      </div>
    </section>
  );
};

export default AnniversaryPage;
