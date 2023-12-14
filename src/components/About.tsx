// const About = () => {
//   return (
//     <div id="About" className="container about">
//       <div className="w-1/2">Hello</div>
//       <div className="flex flex-col gap-4 w-1/2">
//         <h1 className="h1-semibold violet-gradient bg-clip-text text-transparent">
//           INTRODUCTION
//         </h1>
//         <h1 className="h1-semibold">Overview</h1>

//         <p className="about-desc">
//           I am a software developer specializing in frontend technologies within
//           the dynamic IT sector, embrace and thrive in a team environment, and
//           highly value punctuality. Experience in crafting user-friendly
//           interfaces with skills in JavaScript, React, HTML, and CSS.
//         </p>
//         <button className="button violet-gradient border-purple-950">
//           Download CV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;

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
          <h1 className="h1-semibold violet-gradient bg-clip-text text-transparent">
            INTRODUCTION
          </h1>
          <h1 className="h1-semibold">Overview</h1>

          <p className="about-desc">
            I am a software developer specializing in frontend technologies
            within the dynamic IT sector, embrace and thrive in a team
            environment, and highly value punctuality. Experience in crafting
            user-friendly interfaces with skills in JavaScript, React, HTML, and
            CSS.
          </p>
          <button className="button violet-gradient border-purple-950">
            Download CV
          </button>
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
