import React, { useState, useEffect } from 'react';

const TypeWriter = React.memo(({ text, delay = 50, onComplete, showCursor = true, loop = false, phrases = [] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    let timeout;

    if (phrases.length > 0) {
      const currentPhrase = phrases[phraseIndex];

      if (isWaiting) {
        timeout = setTimeout(() => setIsWaiting(false), 2000);
      } else if (isDeleting) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          if (displayText.length <= 1) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }, delay / 2);
      } else {
        if (displayText.length < currentPhrase.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            setGlowIntensity(Math.min(glowIntensity + 0.1, 1));
          }, delay);
        } else if (loop) {
          timeout = setTimeout(() => {
            setIsWaiting(true);
            setTimeout(() => setIsDeleting(true), 2000);
          }, 2000);
        }
      }
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      } else if (onComplete) {
        onComplete();
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, onComplete, displayText, phraseIndex, isDeleting, isWaiting, phrases, loop, glowIntensity]);

  useEffect(() => {
    setGlowIntensity(0);
  }, [phraseIndex]);

  return (
    <span className="relative whitespace-pre">
      <span 
        className="inline-block transition-all duration-300"
        style={{
          textShadow: `0 0 ${20 + glowIntensity * 30}px rgba(59, 130, 246, ${0.5 + glowIntensity * 0.5})`,
          filter: `blur(${glowIntensity * 0.5}px)`,
        }}
      >
        {displayText}
      </span>
      {showCursor && (
        <span className="absolute -right-1 -ml-1 animate-blink text-white/80">I</span>
      )}
    </span>
  );
});

export default TypeWriter;
