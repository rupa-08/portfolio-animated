import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <p className="text-base mt-10 font-bold">
        {progress.toFixed(2)}% Canvas Loading...
      </p>
    </Html>
  );
};

export default Loader;
