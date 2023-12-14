import About from '@/components/About';
import Cursor from '@/components/Cursor';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Cursor />
    </div>
  );
};

export default Home;
