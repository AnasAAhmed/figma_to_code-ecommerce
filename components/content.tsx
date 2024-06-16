import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.937rem] box-border max-w-full text-left text-[3rem] text-black font-poppins mq450:pb-[1.938rem] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start pt-[3.812rem] px-[1.25rem] pb-[6.062rem] box-border relative gap-[0.062rem] max-w-full">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full max-h-full flex items-center justify-center z-[0]">
          <img
            className="w-full h-full overflow-hidden object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.038)]"
            alt=""
            src="/banner-image@2x.png"
          />
        </div>
        <div className="h-[3.75rem] flex flex-row items-start justify-start py-[0rem] pr-[1.437rem] pl-[1.5rem] box-border">
          <img
            className="h-[4.813rem] w-[4.813rem] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
        <h1 className="m-0 h-[4.5rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.813rem] mq800:text-[2.375rem]">
          Shop
        </h1>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.125rem] text-[1rem]">
          <div className="flex flex-row items-start justify-start gap-[0.375rem]">
            <a className="[text-decoration:none] h-[1.5rem] w-[3rem] relative font-medium text-[inherit] inline-block z-[1]">
              Home
            </a>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain z-[1]"
                alt=""
                src="/dashiconsarrowdownalt2@2x.png"
              />
            </div>
            <div className="w-[2.563rem] relative font-light inline-block z-[1]">
              Shop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
