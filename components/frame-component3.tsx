import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.875rem] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 bg-white flex flex-row items-start justify-center py-[2.25rem] pr-[1.25rem] pl-[26.562rem] box-border gap-[9.875rem] max-w-full mq750:gap-[2.438rem] mq750:pl-[6.625rem] mq750:box-border mq1225:gap-[4.938rem] mq1225:pl-[13.25rem] mq1225:box-border mq450:gap-[1.25rem] mq450:pl-[1.25rem] mq450:box-border">
        <div className="h-[6.25rem] w-[90rem] relative bg-white hidden max-w-full" />
        <nav className="m-0 w-[26.875rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[1rem] text-black font-poppins">
            <a className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]">
              Home
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] z-[1]">
              Shop
            </a>
            <a className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]">
              About
            </a>
            <a className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]">
              Contact
            </a>
          </nav>
        </nav>
        <div className="w-[15.438rem] flex flex-row items-start justify-between gap-[1.25rem]">
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/mdiaccountalertoutline.svg"
          />
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconssearch.svg"
          />
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconsheart.svg"
          />
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/antdesignshoppingcartoutlined.svg"
          />
        </div>
      </header>
    </div>
  );
};

export default FrameComponent3;
