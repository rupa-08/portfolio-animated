import { Link } from 'react-scroll';

import TypingAnimation from './TypingAnimation';
import ComputerCanvas from './canvas/Computer';

const Intro = () => {
  return (
    <div id="Intro" className="container intro">
      <div className="w-[44%] flex gap-12">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient-line" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="h1-semibold bg-clip-text text-transparent violet-gradient uppercase text-left">
            Welcome
          </h1>
          <div className="flex flex-col justify-center items-center gap-10">
            <TypingAnimation />
            <Link to="Contact">
              <button className="button bg-transparent border-none font-semibold">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[66%] flex justify-center items-center">
        <ComputerCanvas />
      </div>
    </div>
  );
};

export default Intro;
