import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HeroAccountType = {
  className?: string;
  myAccount?: string;
  myAccount1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
};

const HeroAccount: NextPage<HeroAccountType> = ({
  className = "",
  myAccount,
  myAccount1,
  propLeft,
  propWidth,
  propLeft1,
  propWidth1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const meubelHouseLogos05IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`absolute top-[6.25rem] left-[0rem] w-[90rem] h-[19.75rem] text-left text-[3rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[19.75rem] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.038)]"
          alt=""
          src="/banner-image@2x.png"
        />
      </div>
      <div
        className="absolute top-[3.813rem] left-[36.125rem] w-[17.813rem] h-[8.313rem]"
        style={groupDiv1Style}
      >
        <div className="absolute top-[3.813rem] left-[0rem] font-medium">
          {myAccount}
        </div>
        <img
          className="absolute top-[0rem] left-[6.5rem] w-[4.813rem] h-[4.813rem] object-cover"
          alt=""
          src="/meubel-house-logos05@2x.png"
          style={meubelHouseLogos05IconStyle}
        />
      </div>
      <div
        className="absolute top-[12.188rem] left-[41.25rem] w-[10.875rem] h-[1.5rem] text-[1rem]"
        style={groupDiv2Style}
      >
        <div className="absolute top-[0rem] left-[0rem] font-medium">Home</div>
        <div className="absolute top-[0rem] left-[5rem] font-light">
          {myAccount1}
        </div>
        <img
          className="absolute top-[0.125rem] left-[3.375rem] w-[1.25rem] h-[1.25rem] overflow-hidden object-contain"
          alt=""
          src="/dashiconsarrowdownalt2@2x.png"
        />
      </div>
    </div>
  );
};

export default HeroAccount;
