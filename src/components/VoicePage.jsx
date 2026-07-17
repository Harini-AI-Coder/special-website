import React, { useState, useRef, useEffect } from 'react';
import './VoicePage.css';
import coupleAvatar from '../assets/couple.jpg';
import voiceMessage from '../assets/voice_message.ogg';

const VoicePage = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState('');
  
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setIsPlaying(false);
      setCurrentTime(0);
      
      // Load and autoplay new file
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          });
        }
      }, 100);
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

      {/* Floating hearts layer for full page animation */}
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

          {/* Upload voice message button */}
          <div className="player-upload-section">
            <button 
              className="btn-upload-voice"
              onClick={() => fileInputRef.current.click()}
            >
              Upload Voice Message 🎙️
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <p className="upload-hint">Upload your voice note to play it here!</p>
          </div>

        </div>
      </div>

      {/* Hidden audio player */}
      <audio
        ref={audioRef}
        src={audioUrl || voiceMessage}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

    </section>
  );
};

export default VoicePage;
