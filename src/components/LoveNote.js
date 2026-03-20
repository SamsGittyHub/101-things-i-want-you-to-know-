import React, { useState } from 'react';

const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];

function LoveNote({ number, reason, visible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const colorClass = colorClasses[(number - 1) % colorClasses.length];

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = (e) => {
    e.stopPropagation();
    setShowOverlay(false);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`love-note-wrapper ${colorClass} ${visible ? 'visible' : ''}`}
      >
        <div
          className={`love-note ${isOpen ? 'open' : ''}`}
          onClick={handleClick}
        >
          {/* Front of note */}
          <div className="note-front">
            <div className="note-seal">
              <span className="note-seal-heart">❤️</span>
            </div>
            <span className="note-number">{number}</span>
            <span className="note-label">for you</span>
          </div>

          {/* Back of note */}
          <div className="note-back">
            <span className="note-number-small">#{number}</span>
            <p className="note-reason">{reason}</p>
            <span className="note-heart-bottom">❤️</span>
          </div>
        </div>
      </div>

      {/* Full-screen overlay for reading */}
      {showOverlay && (
        <div className="note-overlay" onClick={handleCloseOverlay}>
          <div className="note-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="note-overlay-close" onClick={handleCloseOverlay}>✕</button>
            <span className="note-overlay-number">#{number}</span>
            <div className="note-overlay-divider"></div>
            <p className="note-overlay-reason">"{reason}"</p>
            <div className="note-overlay-divider"></div>
            <span className="note-overlay-heart">❤️</span>
          </div>
        </div>
      )}
    </>
  );
}

export default LoveNote;
