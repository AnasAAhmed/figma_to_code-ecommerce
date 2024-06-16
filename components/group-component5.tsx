import type { NextPage } from "next";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-snow-100 flex flex-row flex-wrap items-start justify-start pt-[3.187rem] px-[6.25rem] pb-[3.687rem] box-border gap-[1.875rem] shrink-0 [debug_commit:69da668] max-w-full z-[3] mt-[-0.282rem] text-left text-[2.25rem] text-black font-poppins mq750:gap-[0.938rem] mq750:pl-[3.125rem] mq750:pr-[3.125rem] mq750:pb-[2.375rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="h-[42rem] w-[90rem] relative bg-snow-100 hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-end py-[3.187rem] pr-[1.25rem] pl-[6.562rem] box-border relative gap-[1.437rem] min-w-[24.563rem] min-h-[35.125rem] max-w-full z-[1] mq750:min-w-full mq450:pl-[1.25rem] mq450:box-border">
        <h1 className="m-0 h-[3.375rem] relative text-inherit font-medium font-inherit inline-block z-[2] mq750:text-[1.813rem] mq450:text-[1.375rem]">
          Side table
        </h1>
        <img
          className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="w-[7.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border text-[1.5rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem]">
            <h3 className="m-0 h-[2.25rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.188rem]">
              View More
            </h3>
            <div className="self-stretch h-[0.125rem] relative box-border border-t-[2px] border-solid border-black" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end py-[3.187rem] pr-[1.25rem] pl-[6.625rem] box-border relative gap-[1.437rem] min-w-[24.563rem] min-h-[35.125rem] max-w-full z-[1] mq750:min-w-full mq450:pl-[1.25rem] mq450:box-border">
        <h1 className="m-0 h-[3.375rem] relative text-inherit font-medium font-inherit inline-block mq750:text-[1.813rem] mq450:text-[1.375rem]">
          Side table
        </h1>
        <div className="w-[7.813rem] flex flex-col items-start justify-start gap-[0.812rem] text-[1.5rem]">
          <h3 className="m-0 h-[2.25rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.188rem]">
            View More
          </h3>
          <div className="self-stretch h-[0.125rem] relative box-border border-t-[2px] border-solid border-black" />
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-1@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponent5;
