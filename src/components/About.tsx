import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import parallaxFullImg from '../../public/images/cartoon-full.png';
import parallaxHalfImg from '../../public/images/cartoon-halg.png';

const About = () => {
  const ref = useRef(null);

  //   tracking scroll with framer motion useScroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  //   creating parallax effect with framer motion useTransform
  const background = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div>
      <div ref={ref} className="parallax-container" id="About">
        {/* with parallax effect */}

        <motion.div
          className="flex flex-col gap-4 w-1/2 parallax-text"
          style={{ y: textY }}
        >
          <motion.h1
            className="h1-semibold violet-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            INTRODUCTION
          </motion.h1>
          <motion.h1
            className="h1-semibold"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Overview
          </motion.h1>

          <motion.p
            className="about-desc"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0, type: 'spring' }}
            transition={{ duration: 1, delay: 1 }}
          >
            I am a software developer specializing in frontend technologies
            within the dynamic IT sector, embrace and thrive in a team
            environment, and highly value punctuality. Experience in crafting
            user-friendly interfaces with skills in JavaScript, React, HTML, and
            CSS.
          </motion.p>
          <motion.button
            className="button violet-gradient border-purple-950 cursor-pointer"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a className="cursor-pointer"> Download CV</a>
          </motion.button>
        </motion.div>

        {/* with parallax effect */}
        <motion.img
          src={parallaxFullImg}
          alt="Parallax-Full"
          className="parallax-img-full"
          style={{ y: background }}
        />

        {/* without parallax effect */}
        <motion.img
          src={parallaxHalfImg}
          alt="Parallax-Half"
          className="parallax-img-half"
        />
        <div className="overlay" />
      </div>
    </div>
  );
};

export default About;
