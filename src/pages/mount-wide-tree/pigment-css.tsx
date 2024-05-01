import dynamic from "next/dynamic";

const MountWideTree = () => {
  const PigmentTest = dynamic(
    () => import("../../bench/mount-wide-tree/pigment"),
    { ssr: false }
  );

  return <PigmentTest />;
};

export default MountWideTree;
