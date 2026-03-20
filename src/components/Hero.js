import React from 'react';

function Hero({ onStart }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-heart">&#10084;</div>
        <h1 className="hero-title">101 Things I Want You To Know</h1>
        <h2 className="hero-name">Ida</h2>
        <p className="hero-subtitle">every single one, from me to you</p>
        <button className="hero-button" onClick={onStart}>
          Begin
        </button>
      </div>
    </div>
  );
}

export default Hero;
