import type { NextPage } from "next";
import GroupComponent3 from "./group-component3";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[3.437rem] px-[1.25rem] pb-[3.25rem] box-border gap-[4.062rem] max-w-full z-[6] text-left text-[2.25rem] text-black font-poppins mq750:gap-[2rem] mq750:pt-[1.438rem] mq750:pb-[1.375rem] mq750:box-border mq450:gap-[1rem] mq1050:pt-[2.25rem] mq1050:pb-[2.125rem] mq1050:box-border ${className}`}
    >
      <div className="w-[90rem] h-[59rem] relative bg-white hidden max-w-full" />
      <div className="w-[77.5rem] flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full">
        <div className="w-[29.938rem] flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem]">
            <h1 className="m-0 h-[3.375rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq750:text-[1.813rem] mq450:text-[1.375rem]">
              Our Blogs
            </h1>
          </div>
          <div className="relative text-[1rem] font-medium text-darkgray z-[1]">
            Find a bright ideal to suit your taste with our great selection
          </div>
        </div>
      </div>
      <div className="w-[77.5rem] flex flex-col items-start justify-start gap-[4.687rem] max-w-full text-[1.25rem] mq750:gap-[2.313rem] mq450:gap-[1.188rem]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[1.937rem] max-w-full z-[1] mq750:gap-[0.938rem] mq1050:flex-wrap">
          <GroupComponent3 blogCardImage="/rectangle-13@2x.png" />
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.875rem] min-w-[33.125rem] max-w-full mq750:flex-wrap mq750:min-w-full">
            <GroupComponent3
              blogCardImage="/rectangle-14@2x.png"
              propWidth="unset"
              propMinWidth="15.938rem"
              propFlex="1"
              propPadding="0rem 1.687rem"
              propGap="1rem"
            />
            <GroupComponent3
              blogCardImage="/rectangle-15@2x.png"
              propWidth="unset"
              propMinWidth="15.938rem"
              propFlex="1"
              propPadding="0rem 1.625rem 0rem 1.75rem"
              propGap="0.937rem"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <div className="w-[7.875rem] flex flex-col items-start justify-start gap-[1.187rem]">
            <div className="h-[1.875rem] relative font-medium inline-block z-[1] mq450:text-[1rem]">
              View All Post
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.375rem]">
              <div className="h-[0.125rem] flex-1 relative box-border z-[1] border-t-[2px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent2;
