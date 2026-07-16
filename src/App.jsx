import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoveQuestion from './components/LoveQuestion';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import './App.css';

function App() {
  return (
    <div className="app-root">
      {/* Background layers */}
      <div className="app-bg" />
      <Sparkles count={70} />
      <FloatingHearts count={28} />

      {/* Main Content */}
      <Header />
      <main className="app-main">
        <HeroSection />
        <LoveQuestion />
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ just for you &nbsp;·&nbsp; 2026</p>
      </footer>
    </div>
  );
}

export default App;
