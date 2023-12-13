import { useOutlet } from 'react-router-dom';

import Header from '@/components/Header';

const PublicLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      <div>{outlet}</div>
    </>
  );
};

export default PublicLayout;
