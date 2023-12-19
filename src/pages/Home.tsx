import About from '@/components/About';
import Cursor from '@/components/Cursor';
import Intro from '@/components/Intro';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />

      <Cursor />
    </div>
  );
};

export default Home;
