import { Suspense } from 'react';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Loader from './Loader';

interface TechBallCanvasProps {
  image: string;
}

const TechBall = ({ image }: TechBallCanvasProps) => {
  const [decal] = useTexture([image]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.25]} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const TechBallCanvas = ({ image }: TechBallCanvasProps) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <TechBall image={image} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechBallCanvas;
