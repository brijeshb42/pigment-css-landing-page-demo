import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const PigmentTest = dynamic(() => import('../../bench/change-css-prop/pigment'), { ssr: false });

  return <PigmentTest />;
};

export default CreateAndMountComponent;
