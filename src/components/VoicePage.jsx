import React, { useState, useRef, useEffect } from 'react';
import './VoicePage.css';
import coupleAvatar from '../assets/couple.jpg';
import voiceMessage from '../assets/voice_message.ogg';

const VoicePage = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);
  const heartsContainerRef = useRef(null);

  // Auto-spawn hearts when playing
  useEffect(() => {
    if (!isPlaying) return;

    const spawnHeart = () => {
      const container = heartsContainerRef.current;
      if (!container) return;

      const heart = document.createElement('span');
      heart.className = 'player-floating-heart';
      heart.textContent = ['❤️', '💖', '💕', '💙', '💚'][Math.floor(Math.random() * 5)];
      
      const size = 1 + Math.random() * 1.8;
      const startX = 20 + Math.random() * 60; // Spawn near the player center
      const duration = 2 + Math.random() * 3;
      
      heart.style.cssText = `
        left: ${startX}%;
        font-size: ${size}rem;
        animation-duration: ${duration}s;
      `;
      
      container.appendChild(heart);
      setTimeout(() => heart.remove(), duration * 1000);
    };

    const interval = setInterval(spawnHeart, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Audio event handlers
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Playback failed, possibly no audio source loaded:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };


  const handleSayThanks = () => {
    const container = heartsContainerRef.current;
    if (!container) return;

    // Spawn 35 butterflies for a rich full-page effect
    for (let i = 0; i < 35; i++) {
      const wrapper = document.createElement('span');
      wrapper.className = 'voice-butterfly-wrapper';
      
      const wings = document.createElement('span');
      wings.className = 'voice-butterfly-wings';
      wings.textContent = '🦋';
      wrapper.appendChild(wings);
      
      const size = 1.2 + Math.random() * 1.6;
      const isGreen = Math.random() > 0.5;
      
      // Spawn at random points along the bottom edge of the entire screen
      const startX = Math.random() * 100;
      
      // Flight movement: drift slightly sideways and fly past the top of the screen
      const dx = (Math.random() - 0.5) * 180;
      const dy = -(window.innerHeight + 150);
      const rotation = (Math.random() - 0.5) * 90;
      const delay = Math.random() * 1.8; // spread out over time for a wave effect
      const duration = 4.5 + Math.random() * 3.5; // flutter at natural, varying speeds
      
      wrapper.style.cssText = `
        position: absolute;
        left: ${startX}%;
        bottom: -60px;
        font-size: ${size}rem;
        z-index: 1000;
        animation: voiceFlyAround ${duration}s ease-in-out ${delay}s forwards;
        --dx: ${dx}px;
        --dy: ${dy}px;
        --rot: ${rotation}deg;
        filter: ${isGreen ? 'hue-rotate(90deg) saturate(1.8) drop-shadow(0 2px 8px rgba(0,255,128,0.5))' : 'hue-rotate(-15deg) saturate(1.8) drop-shadow(0 2px 8px rgba(0,128,255,0.5))'};
      `;
      
      wings.style.cssText = `
        display: inline-block;
        transform-origin: center center;
        animation: voiceWingFlap 0.12s linear infinite alternate;
      `;
      
      container.appendChild(wrapper);
      
      // Clean up after animation finishes
      setTimeout(() => {
        wrapper.remove();
      }, (duration + delay) * 1000 + 500);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="voice-section">
      
      {/* Return button */}
      <button className="btn-back-vintage" onClick={onBack}>
        Back to Booklet 📖
      </button>

      {/* Floating hearts & butterflies layer for full page animation */}
      <div className="voice-hearts-layer" ref={heartsContainerRef} />

      <div className="voice-container animate-fade-in">
        <h1 className="voice-title">Listen To Me 🎙️</h1>
        <p className="voice-subtitle">A cute voice message recorded just for you</p>

        {/* Audio Player Wrapper */}
        <div className="player-card">
          
          {/* Vinyl CD Player Animation */}
          <div className={`cd-disc-wrap ${isPlaying ? 'playing' : ''}`}>
            <div className="cd-disc">
              <div className="cd-grooves" />
              <div className="cd-center">
                <img src={coupleAvatar} alt="Us" className="cd-avatar" />
              </div>
            </div>
            <div className="cd-tonearm" />
          </div>

          {/* Seek bar and times */}
          <div className="player-track">
            <span className="track-time">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="player-slider"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
            />
            <span className="track-time">{formatTime(duration)}</span>
          </div>

          {/* Player controls */}
          <div className="player-controls">
            <button 
              className={`play-btn ${isPlaying ? 'paused' : ''}`}
              onClick={handlePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>

          {/* Say Thanks section */}
          <div className="player-thanks-section">
            <button 
              className="btn-say-thanks"
              id="say-thanks-btn"
              onClick={handleSayThanks}
            >
              Say Thanks 💖
            </button>
            <p className="thanks-hint">Give a review to your wifi for the efforts! 💕</p>
          </div>

        </div>
      </div>

      {/* Hidden audio player */}
      <audio
        ref={audioRef}
        src={voiceMessage}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

    </section>
  );
};

export default VoicePage;
