import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoveQuestion from './components/LoveQuestion';
import LoveLetter from './components/LoveLetter';
import AnniversaryPage from './components/AnniversaryPage';
import JourneyBooklet from './components/JourneyBooklet';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import './App.css';

// Header titles per page
const PAGE_TITLES = {
  main:        'Happy Birthday Jeev',
  letter:      'Happy Birthday Jeev',
  anniversary: 'Happy 2nd Love Anniversary 💚',
  journey:     'Our Love Journey 💚💙',
};

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = (page) => setCurrentPage(page);

  return (
    <div className="app-root">
      {/* Background layers */}
      <div className="app-bg" />
      <Sparkles count={70} />
      <FloatingHearts count={28} />

      {/* ── Header — shown on all pages except open-letter overlay ── */}
      {currentPage !== 'letter' && (
        <Header title={PAGE_TITLES[currentPage] || PAGE_TITLES.main} />
      )}

      {/* ── Page Router ── */}
      {currentPage === 'main' && (
        <main className="app-main">
          <HeroSection />
          <LoveQuestion
            onSeeMiracle={() => {
              setIsPopupOpen(false);
              navigate('letter');
            }}
            onPopupToggle={setIsPopupOpen}
          />
        </main>
      )}

      {currentPage === 'letter' && (
        <main className="app-main animate-fade-in">
          <LoveLetter
            onBack={() => navigate('main')}
            onClickMe={() => navigate('anniversary')}
          />
        </main>
      )}

      {currentPage === 'anniversary' && (
        <main className="app-main animate-fade-in">
          <AnniversaryPage
            onExploreMore={() => navigate('journey')}
          />
        </main>
      )}

      {currentPage === 'journey' && (
        <main className="app-main animate-fade-in">
          <JourneyBooklet onBack={() => navigate('anniversary')} />
        </main>
      )}

      {/* Footer — only on main page when popup is closed */}
      {!isPopupOpen && currentPage === 'main' && (
        <footer className="app-footer">
          <p>Made with ❤️ just for you &nbsp;·&nbsp; 2026</p>
        </footer>
      )}
    </div>
  );
}

export default App;
