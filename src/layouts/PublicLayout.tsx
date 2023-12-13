import { useOutlet } from 'react-router-dom';

const PublicLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <div>{outlet}</div>
    </>
  );
};

export default PublicLayout;
