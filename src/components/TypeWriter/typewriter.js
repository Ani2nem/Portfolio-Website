import React, { useState, useEffect } from 'react';
import './typewriter.css'

const TypeWriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (index < text.length) {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 300);

    return () => clearTimeout(typingTimeout);
  }, [index, text]);

  return <h1>{currentText}</h1>;
};

export default TypeWriter;
