import { useOutlet } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PublicLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      <div>{outlet}</div>
      <Footer />
    </>
  );
};

export default PublicLayout;
