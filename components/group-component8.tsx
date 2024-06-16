import type { NextPage } from "next";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-snow-200 flex flex-row items-start justify-between pt-[1.375rem] pb-[1.437rem] pr-[6.25rem] pl-[6.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.25rem] text-black font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pl-[3.063rem] mq800:pr-[3.125rem] mq800:box-border mq1150:flex-wrap ${className}`}
    >
      <div className="h-[6.25rem] w-[90rem] relative bg-snow-200 hidden max-w-full" />
      <div className="w-[28.188rem] flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch h-[2.313rem] flex flex-row items-start justify-start gap-[1.937rem] mq450:gap-[0.938rem]">
          <div className="w-[11.5rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/systemuiconsfiltering.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
                  Filter
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.75rem] h-[1.75rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/cigridbiground.svg"
                  />
                </div>
                <input
                  className="m-0 h-[1.688rem] w-[1.5rem]"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className="h-[2.438rem] w-[0.125rem] relative box-border z-[1] border-r-[2px] border-solid border-darkgray" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="relative z-[1]">Showing 1–16 of 32 results</div>
          </div>
        </div>
      </div>
      <div className="w-[27.688rem] flex flex-row items-start justify-start gap-[1.062rem] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start gap-[1.062rem] min-w-[9.688rem]">
          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
            <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
              Show
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] text-darkgray">
            <div className="bg-white flex flex-row items-start justify-start pt-[0.75rem] pb-[0.812rem] pr-[1.062rem] pl-[1.125rem] z-[1]">
              <div className="h-[3.438rem] w-[3.438rem] relative bg-white hidden" />
              <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
                16
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
            <div className="relative z-[1] mq450:text-[1rem]">Short by</div>
          </div>
        </div>
        <div className="w-[11.75rem] bg-white flex flex-row items-start justify-start pt-[0.75rem] px-[1.875rem] pb-[0.812rem] box-border z-[1] text-darkgray">
          <div className="h-[3.438rem] w-[11.75rem] relative bg-white hidden" />
          <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent8;
