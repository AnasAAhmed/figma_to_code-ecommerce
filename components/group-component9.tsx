import type { NextPage } from "next";

export type GroupComponent9Type = {
  className?: string;
};

const GroupComponent9: NextPage<GroupComponent9Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[1.937rem] px-[6.187rem] pb-[2rem] box-border gap-[1.312rem] max-w-full text-left text-[1rem] text-darkgray font-poppins mq750:flex-wrap mq750:pl-[3.063rem] mq750:pr-[3.063rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="h-[6.25rem] w-[90rem] relative bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[0.437rem] pb-[0rem] pr-[0.187rem] pl-[0rem]">
        <div className="flex flex-row items-start justify-start gap-[0.875rem]">
          <a className="[text-decoration:none] h-[1.5rem] relative text-[inherit] inline-block z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
        <a className="[text-decoration:none] relative text-[inherit] z-[1]">
          Shop
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.562rem] pb-[0rem] pr-[0.25rem] pl-[0rem]">
        <img
          className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/dashiconsarrowdownalt2@2x.png"
        />
      </div>
      <div className="h-[2.313rem] w-[8.875rem] flex flex-row items-start justify-between gap-[1.25rem] text-black">
        <div className="h-[2.438rem] w-[0.125rem] relative box-border z-[1] border-r-[2px] border-solid border-darkgray" />
        <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
          <div className="relative z-[1]">Asgaard sofa</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent9;
