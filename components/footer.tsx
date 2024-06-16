import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[5.75rem] box-border max-w-full text-left text-[1.25rem] text-black font-poppins ${className}`}
    >
      <div className="w-[24.5rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
        <div className="rounded-3xs bg-moccasin flex flex-row items-start justify-start py-[0.937rem] pr-[1.625rem] pl-[1.687rem]">
          <div className="h-[3.75rem] w-[3.75rem] relative rounded-3xs bg-moccasin hidden" />
          <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
            1
          </div>
        </div>
        <div className="rounded-3xs bg-oldlace-100 flex flex-row items-start justify-start py-[0.937rem] px-[1.5rem]">
          <div className="h-[3.75rem] w-[3.75rem] relative rounded-3xs bg-oldlace-100 hidden" />
          <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
            2
          </div>
        </div>
        <div className="rounded-3xs bg-oldlace-100 flex flex-row items-start justify-start py-[0.937rem] px-[1.5rem]">
          <div className="h-[3.75rem] w-[3.75rem] relative rounded-3xs bg-oldlace-100 hidden" />
          <div className="h-[1.875rem] relative inline-block z-[1] mq450:text-[1rem]">
            3
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.937rem] pr-[1.687rem] pl-[1.75rem] bg-oldlace-100 rounded-3xs flex flex-row items-start justify-start hover:bg-antiquewhite">
          <div className="h-[3.75rem] w-[6.125rem] relative rounded-3xs bg-oldlace-100 hidden" />
          <div className="h-[1.875rem] relative text-[1.25rem] font-light font-poppins text-black text-left inline-block z-[1] mq450:text-[1rem]">
            Next
          </div>
        </button>
      </div>
    </section>
  );
};

export default Footer;
