import { motion } from 'framer-motion';

import { skillsData } from '@/Constants';
import TechBallCanvas from './canvas/TechBall';

const Skills = () => {
  return (
    <div className="w-full px-16 flex-col">
      <h1 className="h1-semibold title violet-gradient">Technical</h1>
      <h1 className="h1-semibold text-center">Skills</h1>

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
  );
};

export default Skills;
