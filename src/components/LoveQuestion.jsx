import React, { useState, useRef, useEffect } from 'react';
import './LoveQuestion.css';

const LoveQuestion = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const containerRef = useRef(null);
  const noButtonRef = useRef(null);

  const escapeNoButton = () => {
    const container = containerRef.current;
    const noBtn = noButtonRef.current;
    if (!container || !noBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    let newX, newY;
    let attempts = 0;

    do {
      newX = Math.random() * maxX - maxX / 2;
      newY = Math.random() * maxY - maxY / 2;
      attempts++;
    } while (
      Math.abs(newX - noPos.x) < 80 &&
      Math.abs(newY - noPos.y) < 80 &&
      attempts < 20
    );

    setNoPos({ x: newX, y: newY });
    setNoCount(c => c + 1);
  };

  const getNoText = () => {
    const texts = ['No 😅', 'Nope!', 'Run! 🏃', 'Nah~', 'Try Again!', "Can't click me!", '🙈 No!'];
    return texts[noCount % texts.length];
  };

  return (
    <section className="love-section" id="love-question">
      <div className="love-card">
        <div className="love-card-glow" />
        <div className="question-hearts">
          <span>💕</span><span>💞</span><span>💕</span>
        </div>
        <h2 className="question-title">Do You Love Me? 💌</h2>
        <p className="question-sub">Think carefully before you answer... 😉</p>

        <div className="buttons-arena" ref={containerRef}>
          <button
            className="btn-yes"
            id="yes-button"
            onClick={() => setShowPopup(true)}
          >
            ❤️ Yes, I Do!
          </button>

          <button
            ref={noButtonRef}
            className="btn-no"
            id="no-button"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            }}
            onMouseEnter={escapeNoButton}
            onTouchStart={escapeNoButton}
            onClick={escapeNoButton}
          >
            {getNoText()}
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" id="love-popup" onClick={() => setShowPopup(false)}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>
            <div className="popup-hearts-burst">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} className="burst-heart" style={{ '--i': i }}>❤️</span>
              ))}
            </div>
            <div className="popup-emoji-big">💑</div>
            <h2 className="popup-title">Yes, I Love You Too! 💖</h2>
            <p className="popup-message">
              You are my sunshine, my reason to smile every single day. 
              Happy Birthday, my love! 🎂✨
            </p>
            <div className="popup-rose">🌹🌹🌹</div>
            <button
              className="popup-close-btn"
              id="popup-close"
              onClick={() => setShowPopup(false)}
            >
              💝 Forever Yours
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoveQuestion;
