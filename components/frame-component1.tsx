import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-[1.5rem] text-black font-poppins ${className}`}
    >
      <img
        className="h-[49.938rem] w-[61.438rem] absolute !m-[0] top-[calc(50%_-_399.5px)] left-[-2.25rem] object-cover z-[5]"
        loading="lazy"
        alt=""
        src="/asgaard-sofa-1@2x.png"
      />
      <div className="flex-1 bg-oldlace-100 flex flex-col items-center justify-start py-[13.562rem] pr-[1.25rem] pl-[58.437rem] box-border gap-[2.062rem] max-w-full mq750:gap-[1rem] mq750:pl-[14.563rem] mq750:pt-[8.813rem] mq750:pb-[8.813rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border mq1225:pl-[29.188rem] mq1225:box-border">
        <div className="w-[90rem] h-[39.938rem] relative bg-oldlace-100 hidden max-w-full" />
        <div className="w-[20.688rem] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <h3 className="m-0 h-[2.25rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem]">
              New Arrivals
            </h3>
          </div>
          <h1 className="m-0 h-[4.5rem] relative text-[3rem] font-bold font-inherit inline-block z-[2] mq750:text-[2.375rem] mq450:text-[1.813rem]">
            Asgaard sofa
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[2.375rem] box-border max-w-full">
          <button className="cursor-pointer py-[0.937rem] pr-[4.625rem] pl-[4.687rem] bg-oldlace-100 flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-antiquewhite hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="h-[4rem] w-[15.938rem] relative bg-oldlace-100 box-border hidden border-[1px] border-solid border-black" />
            <div className="h-[1.875rem] relative text-[1.25rem] font-poppins text-black text-left inline-block z-[1]">
              Order Now
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
