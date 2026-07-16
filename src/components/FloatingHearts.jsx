import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

const HEART_SHAPES = ['❤️', '💕', '💗', '💖', '💝', '🌹'];

const generateHeart = (id) => ({
  id,
  left: Math.random() * 100,
  size: 16 + Math.random() * 32,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 8,
  emoji: HEART_SHAPES[Math.floor(Math.random() * HEART_SHAPES.length)],
  sway: (Math.random() - 0.5) * 120,
  opacity: 0.5 + Math.random() * 0.5,
});

const FloatingHearts = ({ count = 25 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: count }, (_, i) => generateHeart(i));
    setHearts(initial);

    const interval = setInterval(() => {
      setHearts(prev => {
        const filtered = prev.slice(-count);
        return [...filtered, generateHeart(Date.now() + Math.random())];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map(heart => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--sway': `${heart.sway}px`,
            opacity: heart.opacity,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
