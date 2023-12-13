import TypingAnimation from './TypingAnimation';

const Intro = () => {
  return (
    <div id="Intro" className="container intro">
      <div className="w-1/2 flex justify-center items-center">
        <TypingAnimation />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Intro;
