import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = () => {
  const sentences = [
    'Hi! I am Rupa Shrestha.',
    ' I believe in combining graphic elements with business strategy to develop innovative products...',
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    if (!currentSentence) {
      // Stop if there are no more sentences
      return;
    }

    const typingInterval = setInterval(() => {
      const currentChar = currentSentence[displayedText.length];

      if (currentChar === undefined) {
        // End of the sentence, clear interval and schedule next sentence
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayedText('');
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          );
        }, 2000); // Delay before starting the next sentence

        return;
      }

      setDisplayedText((prevText) => prevText + currentChar);
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentSentenceIndex, displayedText, sentences]);

  return (
    <div>
      {displayedText !== undefined && (
        <h1 className="h1-semibold text-gray-500">
          <motion.span
            className="inline-block mr-[0.1em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {displayedText} <span className="text-purple-400">|</span>
          </motion.span>
        </h1>
      )}
    </div>
  );
};

export default TypingAnimation;
