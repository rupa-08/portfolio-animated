import { motion } from 'framer-motion';

import Carousel from './Carousel';
import Skills from './Skills';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="container" id="Portfolio">
      <div className="flex max-md:flex-col my-24">
        <motion.div
          whileInView={'visible'}
          className="w-1/2 max-md:w-full max-md:my-10 flex flex-col max-md:items-center"
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
          className="overflow-hidden w-1/2 max-md:w-full"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Carousel />
        </motion.div>
      </div>

      <Skills />

      <Contact />
    </div>
  );
};

export default Portfolio;
