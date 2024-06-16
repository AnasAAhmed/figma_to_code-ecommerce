import type { NextPage } from "next";
import Link from "next/link";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[3.437rem] px-[1.25rem] pb-[3.062rem] box-border gap-[4.062rem] shrink-0 [debug_commit:69da668] max-w-full z-[4] mt-[-0.282rem] text-left text-[2.25rem] text-black font-poppins mq750:gap-[2rem] mq450:gap-[1rem] mq450:pb-[1.313rem] mq450:box-border mq1050:pb-[2rem] mq1050:box-border ${className}`}
    >
      <div className="w-[90rem] h-[48.563rem] relative bg-white hidden max-w-full" />
      <div className="w-[77.5rem] flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full">
        <div className="w-[48.313rem] flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <h1 className="m-0 h-[3.375rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq750:text-[1.813rem] mq450:text-[1.375rem]">
              Top Picks For You
            </h1>
          </div>
          <p className="m-0 relative text-[1rem] font-medium text-darkgray z-[1]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
      </div>
      <div className="w-[77.5rem] flex flex-col items-start justify-start gap-[4.312rem] max-w-full text-[1rem] mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
        <div className="flex flex-row items-start justify-center gap-[1.918rem] mq750:gap-[0.938rem] mq1225:flex-wrap">
          <Link href="single-product"className="flex flex-col items-start justify-start gap-[0.781rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="relative z-[1]">Trenton modular sofa_3</div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </Link>
          <Link href="single-product"className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className="w-[13.25rem] relative inline-block z-[1]">
              Granite dining table with dining chair
            </div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </Link>
          <Link href="single-product"className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-4@2x.png"
            />
            <p className="m-0 w-[13.25rem] h-[3rem] relative inline-block z-[1]">
              Outdoor bar table and stool
            </p>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </Link>
          <Link href="single-product"className="flex flex-col items-start justify-start gap-[0.812rem]">
            <img
              className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-5@2x.png"
            />
            <div className="w-[12.438rem] h-[3rem] relative inline-block z-[1]">
              Plain console with teak mirror
            </div>
            <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
              Rs. 25,000.00
            </div>
          </Link>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[1.25rem]">
          <div className="w-[7.188rem] flex flex-col items-start justify-start gap-[1.187rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0.312rem]">
              <div className="h-[1.875rem] relative font-medium inline-block z-[1] mq450:text-[1rem]">
                View More
              </div>
            </div>
            <div className="self-stretch h-[0.125rem] relative box-border z-[1] border-t-[2px] border-solid border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
