import React, { useEffect, useState } from 'react';
import './Sparkles.css';

const Sparkles = ({ count = 60 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      type: Math.random() > 0.6 ? 'twinkle' : 'sparkle',
    }));
    setStars(s);
  }, [count]);

  return (
    <div className="sparkles-layer" aria-hidden="true">
      {stars.map(s => (
        <span
          key={s.id}
          className={`sparkle-dot ${s.type}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
