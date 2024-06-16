import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Footer3Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Footer3: NextPage<Footer3Type> = ({ className = "", propTop }) => {
  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[92.25rem] left-[0rem] w-[90rem] h-[34.688rem] text-left text-[1rem] text-darkgray font-poppins ${className}`}
      style={groupDiv4Style}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[34.688rem]" />
      <div className="absolute top-[6.125rem] left-[6.25rem] w-[77.5rem] h-[26.188rem]">
        <div className="absolute top-[0rem] left-[0.125rem] w-[70.688rem] h-[19.5rem]">
          <div className="absolute top-[6.75rem] left-[0rem] inline-block w-[17.813rem]">
            <p className="m-0">400 University Drive Suite 200 Coral Gables,</p>
            <p className="m-0">FL 33134 USA</p>
          </div>
          <div className="absolute top-[0rem] left-[26.313rem] w-[44.375rem] h-[19.5rem] text-black">
            <div className="absolute top-[0rem] left-[0rem] w-[22rem] h-[19.5rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[4.25rem] h-[19.5rem]">
                <div className="absolute top-[4.938rem] left-[0.125rem] w-[4.125rem] h-[14.563rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium">
                    Home
                  </div>
                  <div className="absolute top-[4.375rem] left-[0rem] font-medium">
                    Shop
                  </div>
                  <div className="absolute top-[8.75rem] left-[0rem] font-medium">
                    About
                  </div>
                  <div className="absolute top-[13.063rem] left-[0rem] font-medium">
                    Contact
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0rem] font-medium text-darkgray">
                  Links
                </div>
              </div>
              <div className="absolute top-[0rem] left-[13.25rem] w-[8.75rem] h-[15.125rem] text-darkgray">
                <div className="absolute top-[0rem] left-[0rem] font-medium">
                  Help
                </div>
                <div className="absolute top-[4.938rem] left-[0rem] w-[8.75rem] h-[10.188rem] text-black">
                  <div className="absolute top-[0rem] left-[0rem] font-medium">
                    Payment Options
                  </div>
                  <div className="absolute top-[4.375rem] left-[0rem] font-medium">
                    Returns
                  </div>
                  <div className="absolute top-[8.688rem] left-[0rem] font-medium">
                    Privacy Policies
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0.125rem] left-[26.5rem] w-[17.875rem] h-[6.313rem] text-darkgray">
              <div className="absolute top-[0rem] left-[0rem] font-medium">
                Newsletter
              </div>
              <div className="absolute top-[4.813rem] left-[0rem] w-[17.875rem] h-[1.5rem] text-[0.875rem]">
                <div className="absolute top-[0rem] left-[0rem]">
                  Enter Your Email Address
                </div>
                <div className="absolute top-[1.5rem] left-[0rem] box-border w-[12.625rem] h-[0.125rem] border-t-[1px] border-solid border-black" />
                <div className="absolute top-[0rem] left-[13.188rem] font-medium text-black">
                  SUBSCRIBE
                </div>
                <div className="absolute top-[1.5rem] left-[13.188rem] box-border w-[4.813rem] h-[0.125rem] border-t-[1px] border-solid border-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[22.5rem] left-[0rem] w-[77.5rem] h-[3.688rem] text-black">
          <div className="absolute top-[0rem] left-[0rem] box-border w-[77.563rem] h-[0.063rem] border-t-[1px] border-solid border-gainsboro-200" />
          <div className="absolute top-[2.188rem] left-[0.125rem]">
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
