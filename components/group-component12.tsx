import type { NextPage } from "next";

export type GroupComponent12Type = {
  className?: string;
};

const GroupComponent12: NextPage<GroupComponent12Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[3.437rem] px-[1.25rem] pb-[6.312rem] box-border gap-[5.812rem] max-w-full text-left text-[2.25rem] text-black font-poppins mq750:gap-[2.875rem] mq1050:pt-[2.25rem] mq1050:pb-[4.125rem] mq1050:box-border mq450:gap-[1.438rem] mq450:pt-[1.438rem] mq450:pb-[2.688rem] mq450:box-border ${className}`}
    >
      <div className="w-[90rem] h-[48.563rem] relative bg-white hidden max-w-full" />
      <div className="w-[77.5rem] flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.437rem] pl-[1.25rem]">
          <h1 className="m-0 h-[3.375rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq750:text-[1.813rem] mq450:text-[1.375rem]">
            Related Products
          </h1>
        </div>
        <div className="flex flex-row items-start justify-center gap-[1.918rem] z-[1] text-[1rem] mq750:gap-[0.938rem] mq1225:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[0.781rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="relative">Trenton modular sofa_3</div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className="w-[13.25rem] relative inline-block">
              Granite dining table with dining chair
            </div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/mask-group-4@2x.png"
            />
            <p className="m-0 w-[13.25rem] h-[3rem] relative inline-block">
              Outdoor bar table and stool
            </p>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/mask-group-5@2x.png"
            />
            <div className="w-[12.438rem] h-[3rem] relative inline-block">
              Plain console with teak mirror
            </div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </div>
        </div>
      </div>
      <div className="w-[77.5rem] flex flex-row items-start justify-center py-[0rem] pr-[0.062rem] pl-[0rem] box-border max-w-full text-[1.25rem]">
        <div className="w-[7.188rem] flex flex-col items-start justify-start gap-[1.187rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0.312rem]">
            <div className="h-[1.875rem] relative font-medium inline-block z-[1] mq450:text-[1rem]">
              View More
            </div>
          </div>
          <div className="self-stretch h-[0.125rem] relative box-border z-[1] border-t-[2px] border-solid border-black" />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent12;
