import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  console.log(position);
  return (
    <motion.div
      className="fixed top-0 left-0 w-7 h-7 rounded-full mix-blend-difference bg-purple-400 z-40"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
};

export default Cursor;
