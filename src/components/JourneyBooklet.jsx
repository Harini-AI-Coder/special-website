import React, { useState } from 'react';
import './JourneyBooklet.css';
import letterAvatar from '../assets/letter_avatar.jpeg';
import coupleAvatar from '../assets/couple.jpg';

const CHAPTERS = [
  {
    id: 1,
    date: 'Day One',
    icon: '✨',
    title: 'The Beginning',
    text: 'From the very first moment our paths crossed, I felt something shift inside me — like the universe quietly whispering that you were exactly who I had been waiting for.',
  },
  {
    id: 2,
    date: 'Growing Together',
    icon: '🌱',
    title: 'Every Laugh, Every Talk',
    text: 'Late nights, endless conversations, and shared silences that said more than words ever could. We grew into each other\'s world so naturally, so beautifully.',
  },
  {
    id: 3,
    date: 'The Promise',
    icon: '💍',
    title: 'Choosing Each Other',
    text: 'In every little decision, every plan, every dream — we chose each other. Not once, not twice, but every single day. That\'s the kind of love I never want to stop choosing.',
  },
  {
    id: 4,
    date: 'Our Adventures',
    icon: '🌍',
    title: 'Side by Side',
    text: 'Whether it was exploring new places or finding joy in the simplest moments, every adventure felt complete because you were next to me.',
  },
  {
    id: 5,
    date: 'Hard Days',
    icon: '🌧️',
    title: 'Through the Storm',
    text: 'We\'ve had our storms — moments that tested us, stretched us, made us doubt. But we always found our way back to each other, stronger and softer all at once.',
  },
  {
    id: 6,
    date: 'Two Years On',
    icon: '💚',
    title: 'Still, Always You',
    text: 'Two years of loving you and I still get butterflies. Still catch myself smiling at your name. Still choose you — endlessly, completely, forever.',
  },
];

const JourneyBooklet = ({ onBack }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  const goNext = () => setActiveChapter(c => Math.min(c + 1, CHAPTERS.length - 1));
  const goPrev = () => setActiveChapter(c => Math.max(c - 1, 0));

  const chapter = CHAPTERS[activeChapter];

  return (
    <section className="booklet-section">

      {/* Return button */}
      <button className="btn-back-vintage" id="booklet-back-btn" onClick={onBack}>
        ✦ Return
      </button>

      {/* Booklet header */}
      <div className="booklet-header animate-fade-in">
        <p className="booklet-subtitle">Our Love Journey</p>
        <h1 className="booklet-main-title">The Story of J &amp; H 💚💙</h1>
      </div>

      {/* Booklet Container with Floating Navigation Arrows */}
      <div className="booklet-container">
        
        {/* Left Floating Arrow */}
        <button
          className="booklet-nav-arrow arrow-left"
          id="booklet-arrow-prev"
          onClick={goPrev}
          disabled={activeChapter === 0}
          aria-label="Previous Page"
        >
          <span>◀</span>
        </button>

        {/* Booklet Card (key resets CSS animation on page change) */}
        <div className="booklet-book" key={chapter.id}>

          {/* Left page — Image Page */}
          <div className="booklet-page booklet-page-left">
            <div className="booklet-page-texture" />
            <div className="booklet-corner-roses" />

            {/* Overlapping 3D-like Hearts on Left Edge */}
            <span className="paper-heart heart-left-1">❤️</span>
            <span className="paper-heart heart-left-2">❤️</span>
            <span className="paper-heart heart-left-3">💖</span>

            <div className="booklet-left-content">
              <span className="booklet-chapter-icon">{chapter.icon}</span>
              <p className="booklet-chapter-num">Chapter {chapter.id}</p>
              <p className="booklet-chapter-date">{chapter.date}</p>
              
              {/* Polaroid Photo Frame */}
              <div className="booklet-photo-frame">
                <img
                  src={activeChapter % 2 === 0 ? coupleAvatar : letterAvatar}
                  alt="Love Journey"
                  className="booklet-photo-img"
                />
                <div className="booklet-photo-tape" />
              </div>
              <p className="booklet-photo-caption">We, together ✨</p>
            </div>
          </div>

          {/* Spine */}
          <div className="booklet-spine" />

          {/* Right page — Content Page */}
          <div className="booklet-page booklet-page-right">
            <div className="booklet-page-texture" />
            <div className="booklet-corner-blossoms" />

            {/* Overlapping 3D-like Hearts on Right Edge */}
            <span className="paper-heart heart-right-1">💖</span>
            <span className="paper-heart heart-right-2">❤️</span>
            <span className="paper-heart heart-right-3">💕</span>

            <div className="booklet-right-content">
              <h2 className="booklet-chapter-title">{chapter.title}</h2>
              <div className="booklet-divider">
                <span>❧</span>
              </div>
              <p className="booklet-chapter-text">{chapter.text}</p>
              <div className="booklet-signature">
                — Harini 💚
              </div>
            </div>
          </div>
        </div>

        {/* Right Floating Arrow */}
        <button
          className="booklet-nav-arrow arrow-right"
          id="booklet-arrow-next"
          onClick={goNext}
          disabled={activeChapter === CHAPTERS.length - 1}
          aria-label="Next Page"
        >
          <span>▶</span>
        </button>
      </div>

      {/* Pagination Dots (indicator) */}
      <div className="booklet-dots-wrapper animate-fade-in">
        <div className="booklet-dots">
          {CHAPTERS.map((_, i) => (
            <button
              key={i}
              className={`booklet-dot${i === activeChapter ? ' active' : ''}`}
              onClick={() => setActiveChapter(i)}
              aria-label={`Chapter ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default JourneyBooklet;
