import { motion } from 'framer-motion';
import { FcMindMap } from 'react-icons/fc';
import { FaUserGraduate } from 'react-icons/fa6';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

import resume from '../../public/pdf/Resume.pdf';
import image from '../../public/images/hero-img/hero-img.jpg';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Rupa-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container flex justify-between max-lg:flex-col" id="About">
      <motion.div
        className="about-gradient"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="about-image-container">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={image}
            alt="image"
            className="about-image glow-effect"
          />
        </div>
      </motion.div>
      <motion.div
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <h1 className="h1-semibold title violet-gradient">INTRODUCTION</h1>
          <h1 className="h1-semibold">Overview.</h1>
        </div>
        <div className="achievement-container">
          <motion.div
            className="achievement-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <MdOutlineWorkspacePremium className="achievement-icon" />
            <p>Experience</p>
            <p>1.5 + years.</p>
          </motion.div>
          <motion.div
            className="achievement-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FcMindMap className="achievement-icon" />
            <p>Completed</p>
            <p>15 + projects.</p>
          </motion.div>
          <motion.div
            className="achievement-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <FaUserGraduate className="achievement-icon" />
            <p>Education</p>
            <p>Bachelor completed.</p>
          </motion.div>
        </div>

        <motion.p
          className="about-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I am a software developer specializing in frontend technologies within
          the dynamic IT sector, embrace and thrive in a team environment, and
          highly value punctuality. Experience in crafting user-friendly
          interfaces with skills in React, React Native, Typescript, HTML, CSS
          and Javascript.
        </motion.p>
        <motion.button
          className="button violet-gradient border-purple-950 cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a className="cursor-pointer" onClick={handleDownload}>
            {' '}
            Download CV
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
