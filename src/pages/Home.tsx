import About from '@/components/About';
import Cursor from '@/components/Cursor';
import Intro from '@/components/Intro';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Portfolio />

      <Cursor />
    </div>
  );
};

export default Home;
