import React, { useState, useRef, useEffect } from 'react';
import './LoveQuestion.css';
import coupleAvatar from '../assets/couple.jpg';

const LoveQuestion = ({ onSeeMiracle }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [popupAvatarSrc, setPopupAvatarSrc] = useState(coupleAvatar);
  const containerRef = useRef(null);
  const noButtonRef = useRef(null);
  const popupFileInputRef = useRef(null);

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

  const handlePopupAvatarClick = () => {
    popupFileInputRef.current.click();
  };

  const handlePopupFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPopupAvatarSrc(url);
    }
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

            <div className="popup-avatar-wrapper" onClick={handlePopupAvatarClick} title="Click to upload couple photo">
              <div className="popup-avatar-ring">
                <div className="popup-avatar-inner">
                  {popupAvatarSrc ? (
                    <img src={popupAvatarSrc} alt="Love Avatar" className="popup-avatar-img" />
                  ) : (
                    <div className="popup-avatar-placeholder">
                      <span className="popup-avatar-icon">📸</span>
                      <span className="popup-avatar-hint">Upload Photo</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="popup-avatar-glow" />
            </div>
            <input
              ref={popupFileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handlePopupFileChange}
              id="popup-avatar-upload"
            />

            <h2 className="popup-title">Yes, I Love You Too! 💖</h2>
            <p className="popup-message">
              You are my sunshine, my reason to smile every single day. 
              Happy Birthday, my love! 🎂✨
            </p>
            <div className="popup-jh-container">
              <span className="jh-heart green-heart">💚</span>
              <span className="jh-text">JH</span>
              <span className="jh-heart blue-heart">💙</span>
            </div>
            <button
              className="popup-close-btn"
              id="popup-close"
              onClick={() => {
                setShowPopup(false);
                if (onSeeMiracle) onSeeMiracle();
              }}
            >
              See Miracle
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoveQuestion;
