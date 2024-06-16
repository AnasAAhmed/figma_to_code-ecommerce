import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ProductThreeItemsType = {
  className?: string;
  maskGroup?: string;
  kentCoffeeTable?: string;
  rs22500000?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const ProductThreeItems: NextPage<ProductThreeItemsType> = ({
  className = "",
  maskGroup,
  kentCoffeeTable,
  rs22500000,
  propHeight,
  propDisplay,
}) => {
  const kentCoffeeTableStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[0.875rem] text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <img
        className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="w-[13.25rem] flex flex-col items-start justify-start gap-[0.687rem]">
        <div
          className="self-stretch h-[1.5rem] relative inline-block z-[1]"
          style={kentCoffeeTableStyle}
        >
          {kentCoffeeTable}
        </div>
        <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
          {rs22500000}
        </div>
      </div>
    </div>
  );
};

export default ProductThreeItems;
