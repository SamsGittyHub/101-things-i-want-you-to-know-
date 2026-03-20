import React, { useState, useCallback } from 'react';

const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];

function LoveNote({ number, reason, visible }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [opened, setOpened] = useState(false);

  const colorClass = colorClasses[(number - 1) % colorClasses.length];

  const handleTap = useCallback(() => {
    setShowOverlay(true);
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowOverlay(false);
  }, []);

  return (
    <>
      <div
        className={`love-note-wrapper ${colorClass} ${visible ? 'visible' : ''} ${opened ? 'opened' : ''}`}
        onClick={handleTap}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleTap();
        }}
        role="button"
        tabIndex={0}
      >
        <div className="note-card">
          <div className="note-seal">
            <span className="note-seal-heart">&#10084;</span>
          </div>
          <span className="note-number">{number}</span>
          <span className="note-label">for you</span>
        </div>
      </div>

      {showOverlay && (
        <div
          className="note-overlay"
          onClick={handleClose}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
          <div
            className="note-overlay-content"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <button
              className="note-overlay-close"
              onClick={handleClose}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClose();
              }}
            >
              ✕
            </button>
            <span className="note-overlay-number">#{number}</span>
            <div className="note-overlay-divider"></div>
            <p className="note-overlay-reason">"{reason}"</p>
            <div className="note-overlay-divider"></div>
            <span className="note-overlay-heart">&#10084;</span>
          </div>
        </div>
      )}
    </>
  );
}

export default LoveNote;
