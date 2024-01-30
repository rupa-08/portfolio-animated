import { Link } from 'react-scroll';
import { FcHome } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { FcWorkflow } from 'react-icons/fc';
import { FcOpenedFolder } from 'react-icons/fc';
import { AiOutlineMessage } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 w-full  p-10 text-white max-md:block hidden">
      <div className="flex justify-evenly bg-gray-900  p-4 rounded-3xl">
        <Link activeClass="active" to="Intro" spy={true}>
          <section className="header-text max-sm:hidden">Intro</section>
          <div className="max-sm:block hidden">
            <FcHome />
          </div>
        </Link>
        <Link activeClass="active" to="About" spy={true}>
          <section className="header-text max-sm:hidden">About</section>
          <div className="max-sm:block hidden">
            <FcContacts />
          </div>
        </Link>
        <Link activeClass="active" to="Work" spy={true}>
          <section className="header-text max-sm:hidden">
            Work Experience
          </section>
          <div className="max-sm:block hidden">
            <FcWorkflow />
          </div>
        </Link>
        <Link activeClass="active" to="Portfolio" spy={true}>
          <section className="header-text max-sm:hidden">Portfolio</section>
          <div className="max-sm:block hidden">
            <FcOpenedFolder />
          </div>
        </Link>
        <Link activeClass="active" to="Contact" spy={true}>
          <section className="header-text max-sm:hidden">Contact</section>
          <div className="max-sm:block hidden">
            <AiOutlineMessage />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
