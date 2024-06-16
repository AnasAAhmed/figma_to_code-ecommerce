import type { NextPage } from "next";

export type Footer2Type = {
  className?: string;
};

const Footer2: NextPage<Footer2Type> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[6.125rem] px-[6.25rem] pb-[2.375rem] box-border gap-[3rem] max-w-full text-left text-[1rem] text-darkgray font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[1.5rem] mq800:pt-[4rem] mq800:px-[3.125rem] mq800:pb-[1.563rem] mq800:box-border ${className}`}
    >
      <div className="w-[90rem] h-[34.688rem] relative bg-white hidden max-w-full" />
      <div className="w-[70.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1150:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[6.75rem] px-[0rem] pb-[0rem]">
            <p className="m-0 h-[4.5rem] relative inline-block z-[1]">
              <span className="block">
                400 University Drive Suite 200 Coral Gables,
              </span>
              <span className="block">FL 33134 USA</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] gap-[3.437rem]">
            <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
              Links
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] text-black">
              <div className="flex flex-col items-start justify-start gap-[2.856rem]">
                <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
                  Home
                </div>
                <div className="relative font-medium z-[1]">Shop</div>
                <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
                  About
                </div>
                <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="w-[31.125rem] flex flex-col items-start justify-start gap-[2.75rem] max-w-full text-black mq800:gap-[1.375rem]">
            <div className="w-[18.625rem] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.562rem] box-border gap-[1.25rem] text-darkgray">
              <div className="relative font-medium z-[1]">Help</div>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
                  Newsletter
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[4.5rem] mq800:flex-wrap mq800:gap-[2.25rem]">
              <div className="relative font-medium z-[1]">Payment Options</div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[0.687rem] min-w-[11.625rem] text-[0.875rem] text-darkgray">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem]">
                  <div className="h-[1.313rem] relative inline-block z-[1]">
                    Enter Your Email Address
                  </div>
                  <div className="self-stretch h-[0.125rem] relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
                <div className="w-[4.688rem] flex flex-col items-start justify-start gap-[0.187rem]">
                  <input
                    className="w-full [border:none] [outline:none] font-medium font-poppins text-[0.875rem] bg-[transparent] self-stretch h-[1.313rem] relative text-black text-left inline-block min-w-[2.813rem] p-0 z-[1]"
                    placeholder="SUBSCRIBE"
                    type="text"
                  />
                  <div className="w-[4.813rem] h-[0.125rem] relative box-border z-[1] border-t-[1px] border-solid border-black" />
                </div>
              </div>
            </div>
            <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
              Returns
            </div>
            <div className="relative font-medium z-[1]">Privacy Policies</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.125rem] text-black mq800:gap-[1.063rem]">
        <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-200" />
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="relative z-[1]">
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
