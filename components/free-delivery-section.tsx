import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FreeDeliverySectionType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const FreeDeliverySection: NextPage<FreeDeliverySectionType> = ({
  className = "",
  propTop,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[73.5rem] left-[0rem] w-[90rem] h-[18.75rem] text-left text-[2rem] text-black font-poppins ${className}`}
      style={groupDiv3Style}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-snow-200 w-[90rem] h-[18.75rem]" />
      <div className="absolute top-[6rem] left-[6.25rem] w-[23.5rem] h-[6.75rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Free Delivery
        </div>
        <div className="absolute top-[3rem] left-[0rem] text-[1.25rem] text-darkgray inline-block w-[23.5rem]">
          For all oders over $50, consectetur adipim scing elit.
        </div>
      </div>
      <div className="absolute top-[6rem] left-[32.75rem] w-[23.5rem] h-[6.75rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          90 Days Return
        </div>
        <div className="absolute top-[3rem] left-[0rem] text-[1.25rem] text-darkgray inline-block w-[23.5rem]">
          If goods have problems, consectetur adipim scing elit.
        </div>
      </div>
      <div className="absolute top-[6rem] left-[59rem] w-[23.5rem] h-[6.75rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Secure Payment
        </div>
        <div className="absolute top-[3rem] left-[0rem] text-[1.25rem] text-darkgray inline-block w-[23.5rem]">
          100% secure payment, consectetur adipim scing elit.
        </div>
      </div>
    </div>
  );
};

export default FreeDeliverySection;
