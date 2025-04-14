import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  typingSpeed = 60,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    } else if (onComplete) {
      // Call onComplete when typing is done
      onComplete();
    }
  }, [currentIndex, text, typingSpeed, onComplete]);

  return <span>{displayText}</span>;
};

export default TypewriterText;