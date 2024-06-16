import type { NextPage } from "next";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-[7.75rem] px-[1.25rem] box-border relative gap-[1.125rem] max-w-full z-[7] text-left text-[3.75rem] text-black font-poppins mq450:pt-[5.063rem] mq450:pb-[5.063rem] mq450:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/group-43@2x.png"
      />
      <div className="flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 h-[5.625rem] relative text-inherit font-bold font-inherit inline-block z-[1] mq750:text-[3rem] mq450:text-[2.25rem]">
          Our Instagram
        </h1>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[4.937rem] pl-[4.875rem] text-[1.25rem] mq450:pl-[2.438rem] mq450:pr-[2.438rem] mq450:box-border">
          <div className="relative z-[1] mq450:text-[1rem]">
            Follow our store on Instagram
          </div>
        </div>
      </div>
      <div className="w-[28.375rem] flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full">
        <button className="cursor-pointer [border:none] py-[1.062rem] px-[1.25rem] bg-snow-100 w-[15.938rem] shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)] rounded-31xl flex flex-row items-start justify-center box-border whitespace-nowrap z-[1] hover:bg-gainsboro-100">
          <div className="h-[4rem] w-[15.938rem] relative rounded-31xl bg-snow-100 hidden" />
          <div className="h-[1.875rem] relative text-[1.25rem] font-poppins text-black text-left inline-block z-[1]">
            Follow Us
          </div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent1;
