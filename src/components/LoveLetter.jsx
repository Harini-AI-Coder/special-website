import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import letterAvatar from '../assets/letter_avatar.jpeg';
import letterBg from '../assets/letter_bg.jpg';

const LoveLetter = ({ onBack, onClickMe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(letterAvatar);
  const avatarInputRef = useRef(null);

  const handleAvatarClick = () => {
    avatarInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatarSrc(URL.createObjectURL(file));
  };

  return (
    <section className="letter-section">

      {/* ── RETURN BUTTON ── */}
      <button className="btn-back-vintage" onClick={onBack}>✦ Return</button>

      {/* ════════════════════════════════
          CLOSED STATE — Envelope
      ════════════════════════════════ */}
      {!isOpen && (
        <div className="env-scene animate-fade-in">
          <div className="env-wrap">
            {/* Envelope card */}
            <div className="env-card">
              {/* Dark red top flap triangle */}
              <div className="env-flap" />

              {/* White body (bottom half) */}
              <div className="env-white-body">
                {/* Bottom-left triangle shadow */}
                <div className="env-shadow-left" />
                <div className="env-shadow-right" />
              </div>

              {/* Wax seal button — centered on seam */}
              <button className="wax-seal" onClick={() => setIsOpen(true)}>
                <span className="seal-heart">❤</span>
                <span className="seal-label">Open Me</span>
              </button>

              {/* "Dear Jeev," text inside the envelope below the button */}
              <p className="env-hint-text">Dear Jeev,</p>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════
          OPEN STATE — Full-page Letter
      ════════════════════════════════ */}
      {isOpen && (
        <div className="letter-overlay animate-fade-in">
          <div
            className="letter-page"
            style={{ '--letter-bg': `url(${letterBg})` }}
          >

            {/* ── TOP SECTION: address + photo circle ── */}
            <div className="letter-top-row">

              {/* Left: sender address block */}
              <div className="sender-block">
                <p className="sender-name">Harini</p>
                <p className="sender-addr">Heart Lane, Love Street</p>
                <p className="sender-addr">Chennai, India</p>
                <p className="sender-date">July 17, 2026</p>
              </div>

              {/* Right: big red photo circle (overflows top-right) */}
              <div
                className="letter-photo-circle"
                onClick={handleAvatarClick}
                title="Click to add your photo"
              >
                {avatarSrc ? (
                  <img src={avatarSrc} alt="Photo" className="letter-photo-img" />
                ) : (
                  <div className="letter-photo-placeholder">
                    <span className="photo-icon">❤</span>
                    <span className="photo-hint">Add Photo</span>
                  </div>
                )}
              </div>
              <input
                ref={avatarInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleAvatarChange}
                id="letter-photo-upload"
              />
            </div>

            {/* Floating small hearts decoration */}
            <span className="deco-heart" style={{ top: '130px', right: '200px', fontSize: '1.2rem' }}>❤</span>
            <span className="deco-heart" style={{ top: '160px', right: '160px', fontSize: '0.8rem' }}>❤</span>
            <span className="deco-heart" style={{ top: '200px', right: '230px', fontSize: '1rem' }}>❤</span>

            {/* ── Recipient line ── */}
            <div className="recipient-block">
              <p className="recipient-name">Jeev,</p>
              <p className="recipient-addr">Your Heart, My World</p>
            </div>

            {/* ── Greeting ── */}
            <h2 className="letter-greeting">My dearest Jeev,</h2>

            {/* ── Body ── */}
            <div className="letter-body-text">
              <p>
                I wanted to take a moment to express the depth of my love for you. You have brought so much
                joy and happiness into my life, and I am grateful daily for your presence.
              </p>
              <p>
                From the moment I first met you, I knew there was something special about you. Your beautiful
                smile, your infectious laughter, and your kind heart captured my attention and my heart. Since
                then, my feelings for you have only grown stronger.
              </p>
              <p>
                I love the way you look at me with your sparkling eyes and the way your laughter fills a room
                with joy. I love the sound of your voice and how you make me feel when you wrap your arms
                around me. I love the little things you do that show me how much you care.
              </p>
              <p>
                My love for you is endless and unconditional. I will always be by your side through thick and
                thin, and I promise to love you with every fiber of my being for eternity.
              </p>
            </div>

            {/* ── Signature ── */}
            <div className="letter-sign-block">
              <p className="letter-sign-closing">Yours always and forever,</p>
              <p className="letter-signature">Harini 💚💙</p>
            </div>

            {/* ── Click Me button — navigates to Anniversary page ── */}
            <button
              className="btn-close-letter btn-click-me"
              id="click-me-btn"
              onClick={() => {
                setIsOpen(false);
                if (onClickMe) onClickMe();
              }}
            >
              Click Me 💌
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default LoveLetter;
