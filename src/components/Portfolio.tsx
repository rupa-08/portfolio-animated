import { motion } from 'framer-motion';

import Carousel from './Carousel';
import Skills from './Skills';
import Contact from './Contact';
import resume from '../../public/pdf/Resume.pdf';

const Portfolio = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Rupa-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className="container" id="Portfolio">
        <div className="flex max-md:flex-col my-24 max-sm:my-5">
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
              className="h1-semibold font-bold"
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
              Here, you'll find examples of my work in web and mobile
              development. I enjoy using React, React Native, TypeScript,
              JavaScript, and Tailwind to bring ideas to life. Take a stroll
              through my portfolio, and get to know the projects that showcase
              my journey in the world of development. This collection reflects
              my practical approach and passion for creating functional
              solutions.
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
              <a className="cursor-pointer" onClick={handleDownload}>
                {' '}
                Download CV
              </a>
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
      </div>
      <Skills />

      <Contact />
    </div>
  );
};

export default Portfolio;
