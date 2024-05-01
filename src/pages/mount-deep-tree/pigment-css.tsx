import dynamic from "next/dynamic";

const MountDeepTree = () => {
  const PigmentTest = dynamic(
    () => import("../../bench/mount-deep-tree/pigment"),
    { ssr: false }
  );

  return <PigmentTest />;
};

export default MountDeepTree;
