import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-[4rem] text-black font-poppins ${className}`}
    >
      <img
        className="h-[62.5rem] w-[53.313rem] absolute !m-[0] top-[-6.25rem] right-[0rem] object-contain z-[2]"
        alt=""
        src="/rocket-single-seater-1@2x.png"
      />
      <div className="flex-1 bg-moccasin flex flex-col items-start justify-start pt-[20.5rem] pb-[18.375rem] pr-[1.25rem] pl-[12.625rem] box-border gap-[2.187rem] shrink-0 [debug_commit:69da668] max-w-full mq750:gap-[1.063rem] mq750:pl-[6.313rem] mq750:box-border mq450:pl-[1.25rem] mq450:pt-[8.625rem] mq450:pb-[7.75rem] mq450:box-border mq1050:pt-[13.313rem] mq1050:pb-[11.938rem] mq1050:box-border">
        <div className="w-[90rem] h-[56.25rem] relative bg-moccasin hidden max-w-full" />
        <h1 className="m-0 w-[27.5rem] h-[12rem] relative text-inherit font-medium font-inherit inline-block max-w-full z-[3] mq750:text-[3.188rem] mq450:text-[2.375rem]">
          Rocket single seater
        </h1>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-[1.5rem]">
          <div className="w-[7.563rem] flex flex-col items-start justify-start gap-[0.812rem]">
            <h3 className="m-0 h-[2.25rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem]">
              Shop Now
            </h3>
            <div className="self-stretch h-[0.125rem] relative box-border z-[1] border-t-[2px] border-solid border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
