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
      <button className="btn-back-vintage" onClick={onBack}>Back to Home 💖</button>

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
                <p className="sender-name">RiniKutty</p>
                <p className="sender-addr">Jeeva Heart, His Aalagi</p>
                <p className="sender-addr">Dindigul, TamilNadu</p>
                <p className="sender-date">July 18, 2026</p>
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
              <p className="recipient-addr">Yen Kannukutty, My Thangooo</p>
            </div>

            {/* ── Greeting ── */}
            <h2 className="letter-greeting">My dear Jeev,</h2>

            {/* ── Body ── */}
            <div className="letter-body-text">
              <p>
                I wanted to take a moment to express the depth of my love for you. Una yenaku Rmba Pudikum Thangooo Epodhum Una Vitu Kuduka Maten. Yen Jeev Many More Happy Returns Of the day da Aalaga.
              </p>
              <p>
                Una Partha apo theriyala Ne dhan yen uyir ah irupa yen ulagama irupa nu che, nala friend ah palagunen neyum unkuda spend pana time yellamea avalo valuable as a friend and as a lover ah waiting che as a wifi ah life long travel pannaum,
                Love U Rmba Che Una yosikama love panen aana crt ah dhan love paniruken ne rmba nala payan thangooo.Yen Chellam
              </p>
              <p>
                Sorry For Everything we passed che. Missing you Muu unkudaye irukanum pola iruku che sekarama vandhu katiko papa waiting. unaku puducha mathiri irukua epome try panuren panite irupen panuven. papa va parthuko na una nala pathukuren valkaya rasichu unayum rasichu un kuda valanum rmba years salikadha kadhal oda.
                ne yena vida yena love panura nu nala purunjukitten ne ilama yenala iruka mudiyadhu adhedhan unakum papa va parthuko una vidamaten thangooo ne dhan venum ne matum dhan venum.
              </p>
              <p>
                My love for you is endless and unconditional. Yen Thangamea, Yen alaga, Yen Kanukutty Love u rmba chellamea. Unakaga na epome iruken che I promise my life and love is only for you my man. my world.
                Unoda karam pidithu valkai thodanga kathirukiren ipadiku un pondatiii...
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
