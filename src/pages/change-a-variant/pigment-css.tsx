import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const PigmentTest = dynamic(() => import('../../bench/change-a-variant/pigment'), { ssr: false });

  return <PigmentTest />;
};

export default CreateAndMountComponent;
