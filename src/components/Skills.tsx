import { motion } from 'framer-motion';

import { skillsData } from '@/Constants';
import TechBallCanvas from './canvas/TechBall';
import StarsCanvas from './canvas/Stars';

const Skills = () => {
  return (
    <div className="p-16 w-full flex-col relative overflow-hidden max-md:mt-[600px] max-sm:mt-[250px]">
      <div className="w-full flex-col max-md:px-0">
        <h1 className="h1-semibold title violet-gradient text-center">
          Technical
        </h1>
        <h1 className="h1-semibold font-bold text-center">Skills.</h1>

        <motion.div className="skills-grid" whileInView={'visible'}>
          {skillsData?.map((item, index) => (
            <div className="skill" key={index}>
              <motion.div
                className="ball-canvas-container"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 0.5 + index * 0.2 },
                  },
                }}
              >
                <TechBallCanvas image={item.image} />
              </motion.div>

              <div className="flex-col w-full">
                <motion.span
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {item.title}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                  className="h-2 w-full bg-gray-200 rounded-full mt-2"
                >
                  <motion.div
                    className="h-full rounded-full violet-gradient opacity-80"
                    style={{ width: `${item.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1.5 + index * 0.2,
                        },
                      },
                    }}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="left-0 top-0 w-full h-full">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Skills;
