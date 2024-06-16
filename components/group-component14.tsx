import type { NextPage } from "next";

export type GroupComponent14Type = {
  className?: string;
};

const GroupComponent14: NextPage<GroupComponent14Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[19.75rem] relative text-left text-[3rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] w-full h-full flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.038)]"
          alt=""
          src="/banner-image@2x.png"
        />
      </div>
      <img
        className="absolute top-[3.813rem] left-[42.625rem] w-[4.813rem] h-[4.813rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/meubel-house-logos05@2x.png"
      />
      <div className="absolute top-[7.625rem] left-[41.25rem] flex flex-col items-start justify-start gap-[0.062rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0.437rem]">
          <h1 className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[6.688rem] z-[1] mq450:text-[1.813rem] mq800:text-[2.375rem]">
            Blog
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.375rem] text-[1rem]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[3rem] z-[1]">
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
          <div className="relative font-light inline-block min-w-[2.188rem] z-[1]">
            Blog
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent14;
