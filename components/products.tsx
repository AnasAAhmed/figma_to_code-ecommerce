import type { NextPage } from "next";

export type ProductsType = {
  className?: string;
};

const Products: NextPage<ProductsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[1.918rem] max-w-full z-[1] mq800:gap-[0.938rem] mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[0.781rem]">
          <img
            className="w-[17.938rem] h-[17.938rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/mask-group-2@2x.png"
          />
          <div className="relative">Trenton modular sofa_3</div>
          <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.812rem]">
          <img
            className="w-[17.938rem] h-[17.938rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/mask-group-3@2x.png"
          />
          <div className="w-[13.25rem] relative inline-block">
            Granite dining table with dining chair
          </div>
          <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.812rem]">
          <img
            className="w-[17.938rem] h-[17.938rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/mask-group-4@2x.png"
          />
          <p className="m-0 w-[13.25rem] h-[3rem] relative inline-block">
            Outdoor bar table and stool
          </p>
          <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.812rem]">
          <img
            className="w-[17.938rem] h-[17.938rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/mask-group-5@2x.png"
          />
          <a className="[text-decoration:none] w-[12.438rem] h-[3rem] relative text-[inherit] inline-block">
            Plain console with teak mirror
          </a>
          <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
            Rs. 25,000.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
