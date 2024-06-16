import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent3Type = {
  className?: string;
  blogCardImage?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({
  className = "",
  blogCardImage,
  propWidth,
  propMinWidth,
  propFlex,
  propPadding,
  propGap,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const blogCardContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`w-[24.563rem] flex flex-col items-start justify-start gap-[2.062rem] min-w-[24.563rem] max-w-full text-left text-[1.25rem] text-black font-poppins mq750:min-w-full mq450:gap-[1rem] mq1050:flex-1 ${className}`}
      style={groupDivStyle}
    >
      <img
        className="self-stretch h-[24.563rem] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={blogCardImage}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full"
        style={blogCardContentStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
          <div className="relative mq450:text-[1rem]">
            Going all-in with millennial design
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[1.5rem]">
            <h3 className="m-0 h-[2.25rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.188rem]">
              Read More
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.625rem] text-[1rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div
              className="flex-1 flex flex-col items-end justify-start gap-[1.062rem]"
              style={frameDivStyle}
            >
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.187rem] pl-[3.437rem]">
                <div className="h-[0.125rem] flex-1 relative box-border border-t-[2px] border-solid border-black" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem]">
                <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.125rem] h-[1.113rem] relative"
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="h-[1.5rem] relative font-light inline-block">
                    5 min
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                  <img
                    className="h-[1.375rem] w-[1.375rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/uilcalender.svg"
                  />
                  <div className="h-[1.5rem] relative font-light inline-block">
                    12
                    <sup>th</sup> Oct 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
