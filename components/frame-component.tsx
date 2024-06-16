import type { NextPage } from "next";
import GroupComponent1 from "./group-component1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-[3.75rem] text-black font-poppins ${className}`}
    >
      <GroupComponent1 />
    </section>
  );
};

export default FrameComponent;
