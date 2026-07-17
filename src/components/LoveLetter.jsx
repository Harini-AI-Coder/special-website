import React, { useState } from 'react';
import './LoveLetter.css';

const LoveLetter = ({ onBack }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="letter-section">
      <button className="btn-back-vintage" onClick={onBack} title="Go back to the question">
        ✦ Return
      </button>

      <div className={`envelope-container ${isOpen ? 'open' : ''}`}>
        {/* The Envelope */}
        <div className="envelope" onClick={() => !isOpen && setIsOpen(true)}>
          <div className="envelope-back"></div>
          
          {/* The actual Letter inside */}
          <div className="letter-paper">
            <div className="letter-paper-content">
              <div className="letter-header">
                <h3>Dearest Jeev,</h3>
                <span className="date-stamp">July 17, 2026</span>
              </div>
              <div className="letter-body">
                <p>
                  From the very depth of my heart, I want to wish you the happiest of birthdays.
                  Every single moment shared with you feels like a beautiful dream, and today is the 
                  most perfect day to remind you how much you truly mean to me.
                </p>
                <p>
                  You are my safe harbor, my greatest joy, and my absolute favorite person. 
                  I cherish your smile, your warmth, and the beautiful kindness you radiate. 
                  I want to walk by your side through all the seasons of life, loving you 
                  more and more with every heartbeat.
                </p>
                <p>
                  May this year bring you all the magic, laughter, and infinite happiness 
                  that you so deeply deserve. 
                </p>
              </div>
              <div className="letter-footer">
                <p>With all my love,</p>
                <p className="signature">JH 💚💙</p>
              </div>
            </div>
          </div>

          <div className="envelope-front">
            <div className="envelope-flap"></div>
            {!isOpen && (
              <div className="wax-seal" onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}>
                <div className="seal-heart">❤</div>
                <div className="seal-text">Open Me</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="letter-controls animate-fade-in">
          <button className="btn-close-letter" onClick={() => setIsOpen(false)}>
            Close Letter
          </button>
        </div>
      )}
    </section>
  );
};

export default LoveLetter;
