import React, { useState } from 'react';
import './JourneyBooklet.css';
import letterAvatar from '../assets/letter_avatar.jpeg';
import coupleAvatar from '../assets/couple.jpg';

const CHAPTERS = [
  {
    id: 1,
    date: 'First Meet',
    icon: '✨',
    title: 'The Beginning',
    text: 'Una Nerula Partha Mudhal Naal Yen life la Maraka mudiyadhu che avalo cute ah iurndha bike la smart ah nerula Enaavan nu feel shy vera Sema Feel and First Kiss vera the day Enjoyed with you che theme park rides our romance love and care namba sambavam the life starts there.na andha sambavam thandi vara rmba tym achu aana ne iruka yellam namakaga nu avalo bold ah irundhen yellam ne venum nu. ne matum venum muuu. always.....',
  },
  {
    id: 2,
    date: 'Second Meet',
    icon: '🌱',
    title: 'Missing, Confuse Meet',
    text: 'Second time yen kai full ah sari agala aana una pakanum pakanum pakanum nu meet panom neraya thadangal dhan but neraya tym spend panom angayum samabavam kela vilundhom fun and feels. una hug pani aluthen ne supportive ah irundha ne yena rasicha sendhu saptom unoda supportive nala irundhu avalo motivate pesuna bad and negative thoughts adhuku aprm illa sema feel missing feel also the efforst we both on the meet loved most che...',
  },
  {
    id: 3,
    date: 'Cbe Meet',
    icon: '💍',
    title: 'Choosing Each Other',
    text: 'Unakandi vandhen pakanum work vanganum nu ne vandha yena paka but pics del pani angayum samabavam pana una partha andha nodi thaniya neraya space iurndhuchu private meet first tym we are close each other kiss hug everything the day made us to missing more after that. ne apo kudutha toothpaste inam yenta iruku che vachuruken. adhuku aprm dhan sema missing feel apo apo apdi pakanum nu cbe vandhen and life la next step yedukanum nu un kaipudikanum nu...',
  },
  {
    id: 4,
    date: 'Hard Days',
    icon: '🌍',
    title: 'Happiness and Broken',
    text: 'U come for me cbe,lots of plan,first tym success achu namba meet panom 2days sema feel yutiviten everything sleep, cuddle care, love, u nelave express pana papa mela iruka love ah. happy feel atlast i broked it sry for everything che i wont happend agian but andha moment i learned that i can leave and u loved me more than me na shock dhan ne easy ya poiduva nenachen zero hope but yenakandi vandha literaally now emotion aguren yenakndi vandha ore jeevan ne dhan yen life la na cross pani vandha path unakndi epome irupen yen uyire kuda kudupen che..',
  },
  {
    id: 5,
    date: 'The Promises',
    icon: '🌧️',
    title: 'Always Together',
    text: 'Na una paka 8hrs travel pani chennai vandhen, bold ah fyt achu ne hate panita avalodhan nu nenachen the moment ne yena manichu hug pana apdiye flat vilundhuten chaa evalo kind heart una poi kasta paduthunom nu sema feelings but sema life che unkuda valndhuten epome apdi valanum missing u more unakandi yenaala nala cook pana mudiyum therunjukittta moment and nala partner ne we can survive as a partner demo pathachu....waiting for next demo',
  },
  {
    id: 6,
    date: 'Two Years On',
    icon: '💚',
    title: 'Still, Always You',
    text: 'Finally its ur birthday and our 2nd love aniversay HBY MY love and Happy Aniversay . life la next step vetula okay vanganum sekaram marriage pananum next step of work too. kandipa seruvom serndhe thiruvom love u soo soo much thangoo next year ipdi surprise panama un pondatiiya surprise panum yen assaya fullfill panu muu... namakunu oru alaga veedu vela oru kolandha avalodhan adhu podhum epome un parthukite irukanum kiss panite irukanum avalodhan aasa..',
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
        Back to Wishes 💖
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
          <span className="arrow-icon-flip">💘</span>
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
          <span>💘</span>
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
