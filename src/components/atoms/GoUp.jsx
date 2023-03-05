// A litle component to go to the first section of the page.
// It has to be a circle with an arrow pointing up.

import React from 'react';
import { motion } from 'framer-motion';
import Linker from './Linker';

const GoUp = () => {
  const handleClick = () => {
    // use the id #begin to go to the first section of the page
    const element = document.getElementById('root');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-10 right-10 bg-white rounded-full p-2 shadow-lg cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.div>
  );
}

export default GoUp;