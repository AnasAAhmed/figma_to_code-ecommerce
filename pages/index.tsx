import type { NextPage } from "next";
import Navbar from "../components/navbar";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent5 from "../components/group-component5";
import GroupComponent4 from "../components/group-component4";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent2 from "../components/group-component2";
import FrameComponent from "../components/frame-component";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <Navbar /> */}
      <section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.812rem] box-border max-w-full">
        <FrameComponent2 />
        <GroupComponent5 />
        <GroupComponent4 />
      </section>
      <FrameComponent1 />
      <GroupComponent2 />
      <FrameComponent />
    </div>
  );
};

export default Home;
