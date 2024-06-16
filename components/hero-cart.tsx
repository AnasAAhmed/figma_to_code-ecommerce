import type { NextPage } from "next";

export type HeroCartType = {
  className?: string;
};

const HeroCart: NextPage<HeroCartType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[3.812rem] pb-[6.062rem] pr-[1.562rem] pl-[1.25rem] relative gap-[0.062rem] text-left text-[3rem] text-black font-poppins ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full max-h-full flex items-center justify-center z-[0]">
        <img
          className="w-full h-full overflow-hidden object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.038)]"
          alt=""
          src="/banner-image@2x.png"
        />
      </div>
      <div className="w-[7.188rem] flex flex-row items-start justify-end py-[0rem] pr-[0.125rem] pl-[0.437rem] box-border">
        <div className="h-[8.313rem] flex-1 relative">
          <h1 className="m-0 absolute top-[3.813rem] left-[0rem] text-inherit font-medium font-inherit z-[1] mq450:text-[1.813rem] mq800:text-[2.375rem]">
            Cart
          </h1>
          <img
            className="absolute top-[0rem] left-[0.938rem] w-[4.813rem] h-[4.813rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.375rem] text-[1rem]">
        <a className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]">
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
        <div className="h-[1.5rem] relative font-light inline-block z-[1]">
          Cart
        </div>
      </div>
    </section>
  );
};

export default HeroCart;
