import { FcMindMap } from 'react-icons/fc';
import { FaUserGraduate } from 'react-icons/fa6';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

import image from '../../public/images/hero-img/hero-img.jpg';

const About = () => {
  return (
    <div className="container flex justify-between max-lg:flex-col" id="About">
      <div className="about-gradient">
        <div className="about-image-container">
          <img src={image} alt="image" className="about-image glow-effect" />
        </div>
      </div>
      <div className="about">
        <div>
          <h1 className="h1-semibold title violet-gradient">INTRODUCTION</h1>
          <h1 className="h1-semibold">Overview.</h1>
        </div>
        <div className="achievement-container">
          <div className="achievement-card">
            <MdOutlineWorkspacePremium className="achievement-icon" />
            <p>Experience</p>
            <p>1.5 + years.</p>
          </div>
          <div className="achievement-card">
            <FcMindMap className="achievement-icon" />
            <p>Completed</p>
            <p>20 + projects.</p>
          </div>
          <div className="achievement-card">
            <FaUserGraduate className="achievement-icon" />
            <p>Education</p>
            <p>Post-Graduate</p>
          </div>
        </div>

        <p className="about-desc">
          I am a software developer specializing in frontend technologies within
          the dynamic IT sector, embrace and thrive in a team environment, and
          highly value punctuality. Experience in crafting user-friendly
          interfaces with skills in JavaScript, React, HTML, and CSS.
        </p>
        <button className="button violet-gradient border-purple-950 cursor-pointer">
          <a className="cursor-pointer"> Download CV</a>
        </button>
      </div>
    </div>
  );
};

export default About;
