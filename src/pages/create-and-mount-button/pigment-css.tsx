import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const PigmentTest = dynamic(() => import('../../bench/create-and-mount-button/pigment'), { ssr: false });

  return <PigmentTest />;
};

export default CreateAndMountComponent;
