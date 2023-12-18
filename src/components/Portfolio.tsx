import { motion } from 'framer-motion';

import Skills from './Skills';
import Carousel from './Carousel';

const Portfolio = () => {
  return (
    <div className="container flex-col gap-6" id="Portfolio">
      <div
        className="flex sm:flex-col md:flex-row my-20"
        style={{
          display: 'flex',
        }}
      >
        <motion.div
          whileInView={'visible'}
          style={{
            width: '50vw',
          }}
        >
          <motion.h1
            className="h1-semibold title violet-gradient"
            initial={{ opacity: 0, x: -200 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
          >
            My Protfolio
          </motion.h1>
          <motion.h1
            className="text-[45px] font-bold"
            initial={{ opacity: 0, x: -200 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.75 },
              },
            }}
          >
            Projects.
          </motion.h1>

          <motion.p
            className="about-desc mt-12"
            initial={{ opacity: 0, x: -200 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
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
            initial={{ opacity: 0, x: -200 }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1.25 },
              },
            }}
          >
            <a className="cursor-pointer"> Download CV</a>
          </motion.button>
        </motion.div>
        <motion.div
          style={{
            width: '50vw',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Carousel />
        </motion.div>
      </div>

      <Skills />
    </div>
  );
};

export default Portfolio;
