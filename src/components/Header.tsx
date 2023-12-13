import { Link } from 'react-scroll';

import image from '/images/hero-img/hero-img.jpg';
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link activeClass="active" to="Intro" spy={true}>
          <section className="header-text">Intro</section>
        </Link>
        <Link activeClass="active" to="About" spy={true}>
          <section className="header-text">About</section>
        </Link>
        <Link activeClass="active" to="Work" spy={true}>
          <section className="header-text">Work Experience</section>
        </Link>
        <Link activeClass="active" to="Portfolio" spy={true}>
          <section className="header-text">Portfolio</section>
        </Link>
        <Link activeClass="active" to="Contact" spy={true}>
          <section className="header-text">Contact</section>
        </Link>
        <img src={image} className="hero-image" />
      </div>
    </div>
  );
};

export default Header;
