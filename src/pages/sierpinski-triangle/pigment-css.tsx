import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const PigmentTest = dynamic(() => import('../../bench/sierpinski-triangle/pigment'), { ssr: false });

  return <PigmentTest />;
};

export default SierpinskiTriangle;
