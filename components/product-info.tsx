import type { NextPage } from "next";

export type ProductInfoType = {
  className?: string;
};

const ProductInfo: NextPage<ProductInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-oldlace-100 overflow-x-auto flex flex-row items-start justify-between pt-[0.937rem] pb-[1rem] pr-[9.125rem] pl-[8.875rem] gap-[1.25rem] z-[1] text-left text-[1rem] text-black font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1150:pl-[4.438rem] mq1150:pr-[4.563rem] mq1150:box-border ${className}`}
    >
      <div className="h-[3.438rem] w-[51.063rem] relative bg-oldlace-100 shrink-0 hidden" />
      <div className="h-[1.5rem] relative font-medium inline-block z-[2]">
        Product
      </div>
      <div className="w-[3.938rem] shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
        <div className="h-[1.5rem] relative font-medium inline-block z-[2]">
          Price
        </div>
      </div>
      <div className="w-[10.938rem] shrink-0 flex flex-row items-start justify-start gap-[2.25rem]">
        <div className="relative font-medium z-[2]">Quantity</div>
        <div className="h-[1.5rem] relative font-medium inline-block z-[2]">
          Subtotal
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
