import { motion } from 'framer-motion';

import Skills from './Skills';
import { portfolioProjects } from '@/Constants';

const Portfolio = () => {
  const alternatingColor = ['#29AB87', '#6CA0DC', '#F5761A'];
  return (
    <div>
      <div
        id="Portfolio"
        className="flex container sm:flex-col md:flex-row w-full"
      >
        <motion.div className="portfolio-section-left" whileInView={'visible'}>
          <motion.h1
            className="h1-semibold title violet-gradient"
            initial={{ opacity: 0, y: 150 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
          >
            My Protfolio
          </motion.h1>
          <motion.h1
            className="text-[45px] font-bold"
            initial={{ opacity: 0, y: 150 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.75 },
              },
            }}
          >
            Projects.
          </motion.h1>

          <motion.p
            className="about-desc mt-12"
            initial={{ opacity: 0, y: 150 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1 },
              },
            }}
          >
            I am a software developer specializing in frontend technologies
            within the dynamic IT sector, embrace and thrive in a team
            environment, and highly value punctuality. Experience in crafting
            user-friendly interfaces with skills in JavaScript, React, HTML, and
            CSS.
          </motion.p>
          <motion.button
            className="button violet-gradient border-purple-950 cursor-pointer mt-9"
            initial={{ opacity: 0, y: 150 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1.25 },
              },
            }}
          >
            <a className="cursor-pointer"> Download CV</a>
          </motion.button>
        </motion.div>
        <motion.div
          className="portfolio-section-right"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          {portfolioProjects?.map((item, index) => (
            <div className="portfolio-gradient-container" key={index}>
              <div className="bg-tertiary portfolio-inner-container">
                <div className="flex flex-col w-full px-3 pt-3 pb-7">
                  {/* image section */}
                  <div className="relative cursor-pointer portfolio">
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.projectName}
                        className="w-full aspect-video rounded-xl image"
                      />
                    </div>
                    <div className="image-overlay">
                      <div className="flex sm:flex-col md:flex-row gap-4">
                        <a
                          href={item.gitLink}
                          target="blank"
                          className="portfolio-button"
                        >
                          <button className="portfolio-button-text">
                            Github
                          </button>
                        </a>
                        {item?.liveDemoLink !== '' && (
                          <a
                            href={item?.liveDemoLink}
                            target="blank"
                            className="portfolio-button"
                          >
                            <button className="portfolio-button-text">
                              Demo
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="font-semibold text-base text-left">
                    {item.projectName}
                  </p>
                  <p className="text-base text-left py-3">{item.description}</p>
                  <div className="flex gap-2 py-3">
                    {item.tags.map((label, index) => (
                      <p
                        className="text-base text-left"
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
          ))}
        </motion.div>
      </div>
      <Skills />
    </div>
  );
};

export default Portfolio;
