import { Link } from 'react-scroll';
import { HiMiniCursorArrowRipple } from 'react-icons/hi2';

import StarsCanvas from './canvas/Stars';
import TypingAnimation from './TypingAnimation';
import ComputerCanvas from './canvas/Computer';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div>
      <div id="Intro" className="container intro">
        <div className="w-[44%] flex gap-12">
          <div className="flex flex-col justify-center items-center">
            <motion.div
              className="w-5 h-5 rounded-full bg-[#915eff]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-1 sm:h-80 h-40 violet-gradient-line"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="h1-semibold bg-clip-text text-transparent violet-gradient uppercase text-left font-bold">
              Welcome
            </h1>
            <div className="flex flex-col justify-center items-center mb-10">
              <TypingAnimation />
            </div>
            <Link to="Contact">
              <motion.div
                className="flex items-center gap-2 cursor-pointer button"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button className="bg-transparent border-none font-semibold">
                  Let's Connect
                </button>
                <HiMiniCursorArrowRipple className="text-lg" />
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="w-[66%] flex justify-center items-center">
          <ComputerCanvas />
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Intro;
