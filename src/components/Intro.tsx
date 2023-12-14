import { Link } from 'react-scroll';
import { HiMiniCursorArrowRipple } from 'react-icons/hi2';

import StarsCanvas from './canvas/Stars';
import TypingAnimation from './TypingAnimation';
import ComputerCanvas from './canvas/Computer';

const Intro = () => {
  return (
    <div>
      <div id="Intro" className="container intro">
        <div className="w-[44%] flex gap-12">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient-line" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="h1-semibold bg-clip-text text-transparent violet-gradient uppercase text-left font-bold">
              Welcome
            </h1>
            <div className="flex flex-col justify-center items-center mb-10">
              <TypingAnimation />
            </div>
            <Link to="Contact">
              <div className="flex items-center gap-2 cursor-pointer button">
                <button className="bg-transparent border-none font-semibold">
                  Let's Connect
                </button>
                <HiMiniCursorArrowRipple className="text-lg" />
              </div>
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
