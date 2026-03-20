import React, { useState, useEffect } from 'react';

function FloatingHearts() {
  const [particles, setParticles] = useState([]);
  const isMobile = window.innerWidth <= 480;

  useEffect(() => {
    const maxParticles = isMobile ? 8 : 15;
    const interval_ms = isMobile ? 6000 : 4000;

    const createParticle = () => {
      const id = Date.now() + Math.random();
      const particle = {
        id,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 8,
        type: Math.random() > 0.7 ? 'dot' : 'heart',
      };
      setParticles(prev => [...prev.slice(-maxParticles), particle]);
    };

    const initialCount = isMobile ? 3 : 6;
    for (let i = 0; i < initialCount; i++) {
      setTimeout(createParticle, i * 800);
    }

    const interval = setInterval(createParticle, interval_ms);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="floating-hearts">
      {particles.map(p => (
        <span
          key={p.id}
          className="floating-heart"
          style={{
            left: `${p.left}%`,
            fontSize: p.type === 'heart' ? `${p.size * 4 + 6}px` : '0',
            width: p.type === 'dot' ? `${p.size}px` : undefined,
            height: p.type === 'dot' ? `${p.size}px` : undefined,
            borderRadius: p.type === 'dot' ? '50%' : undefined,
            background: p.type === 'dot' ? 'rgba(201, 112, 125, 0.4)' : undefined,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.type === 'heart' ? '♥' : ''}
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
