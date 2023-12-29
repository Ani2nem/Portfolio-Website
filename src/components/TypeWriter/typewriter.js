import React, { useState, useEffect } from 'react';
import './typewriter.css';

const TypeWriter = ({ text, highlightColor }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (index < text.length) {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 200);

    return () => clearTimeout(typingTimeout);
  }, [index, text]);

  return (
    <h1>
      <span>{currentText.substring(0,8)}</span>
      <span style={{ color: highlightColor }}>{currentText.substring(8,16)}</span>
    </h1>
  );
};

export default TypeWriter;
