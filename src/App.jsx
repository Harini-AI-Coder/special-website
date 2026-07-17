import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoveQuestion from './components/LoveQuestion';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div className="app-root">
      {/* Background layers */}
      <div className="app-bg" />
      <Sparkles count={70} />
      <FloatingHearts count={28} />

      {/* Conditionally show header and components */}
      {currentPage === 'main' ? (
        <>
          <Header />
          <main className="app-main">
            <HeroSection />
            <LoveQuestion onSeeMiracle={() => setCurrentPage('letter')} />
          </main>
        </>
      ) : (
        <main className="app-main animate-fade-in">
          <LoveLetter onBack={() => setCurrentPage('main')} />
        </main>
      )}

      <footer className="app-footer">
        <p>Made with ❤️ just for you &nbsp;·&nbsp; 2026</p>
      </footer>
    </div>
  );
}

export default App;
