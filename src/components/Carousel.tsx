import { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

import { portfolioProjects } from '@/Constants';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const alternatingColor = ['#29AB87', '#6CA0DC', '#F5761A'];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < portfolioProjects.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="w-[50vw] max-md:w-full relative">
      <div
        className="flex"
        style={{
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {portfolioProjects.map((item, index) => (
          <div
            key={index}
            className="w-[50vw] max-md:w-full flex flex-grow-0 flex-shrink-0 flex-basis-auto justify-center items-center max-md:px-11"
          >
            <div className="portfolio-gradient-container" key={index}>
              <div className="bg-tertiary portfolio-inner-container">
                <div className="flex flex-col w-full px-3 pt-3 pb-7">
                  {/* image section */}
                  <div className="portfolio relative cursor-pointer ">
                    <div className="image-container bg-[#1b1b2c] rounded-xl">
                      <img
                        src={item.image}
                        alt={item.projectName}
                        className={`w-full aspect-video rounded-xl image  ${
                          item.projectName === 'E-book' ||
                          item.projectName === 'Eateries'
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />
                    </div>
                    <div className="image-overlay">
                      <div className="flex sm:flex-col md:flex-row gap-4">
                        <a
                          href={item.gitLink}
                          target="blank"
                          className="portfolio-button max-w-max px-5"
                        >
                          <button className="portfolio-button-text">
                            Github
                          </button>
                        </a>
                        {item?.liveDemoLink !== '' && (
                          <a
                            href={item?.liveDemoLink}
                            target="blank"
                            className="portfolio-button max-w-max px-5"
                          >
                            <button className="portfolio-button-text">
                              Demo
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="font-semibold text-base text-left pt-5">
                    {item.projectName}
                  </p>
                  <p className="text-base text-left py-3 max-sm:hidden">
                    {item.description}
                  </p>
                  <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                      {item.tags.map((label, index) => (
                        <p
                          className="text-base text-left max-sm:text-xs"
                          key={index}
                          style={{
                            color: `${
                              alternatingColor[index % alternatingColor.length]
                            }`,
                          }}
                        >
                          #{label}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={handlePrevClick}
        className={`absolute top-1/2 left-20 max-md:left-[-2px] ${
          currentIndex === 0
            ? 'cursor-not-allowed text-gray-700'
            : 'cursor-pointer text-white'
        }`}
      >
        <CiCircleChevLeft className="text-3xl" />
      </div>
      <div
        onClick={handleNextClick}
        className={`absolute top-1/2 right-20 max-md:right-[-2px] ${
          currentIndex === portfolioProjects.length - 1
            ? 'cursor-not-allowed text-gray-700'
            : 'cursor-pointer text-white'
        }`}
      >
        <CiCircleChevRight className="text-3xl" />
      </div>
    </div>
  );
};

export default Carousel;
