import type { NextPage } from "next";
import ProductThreeItems from "./product-three-items";

export type ProductRowType = {
  className?: string;
};

const ProductRow: NextPage<ProductRowType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="w-[77.625rem] flex flex-row flex-wrap items-end justify-center gap-[1.875rem] max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[1rem] min-w-[24.625rem] max-w-full mq800:flex-wrap mq800:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.625rem] min-w-[12.25rem] mq450:gap-[1.313rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <div className="flex flex-col items-start justify-start gap-[0.875rem]">
                <img
                  className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/mask-group-41@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.687rem]">
                  <div className="h-[1.5rem] relative inline-block z-[1]">
                    Grain coffee table
                  </div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block z-[1] mq450:text-[1.188rem]">
                    Rs. 15,000.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.875rem]">
              <img
                className="w-[17.938rem] h-[17.938rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/mask-group-51@2x.png"
              />
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                <div className="flex flex-col items-start justify-start gap-[0.687rem]">
                  <div className="relative">Plain console_</div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                    Rs. 258,200.00
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.875rem]">
                  <img
                    className="h-[17.938rem] w-[17.938rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/mask-group-6@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.687rem]">
                  <div className="relative">Granite square side table</div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                    Rs. 258,800.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2.656rem] min-w-[18rem] mq450:gap-[1.313rem] mq800:flex-1">
            <ProductThreeItems
              maskGroup="/mask-group-7@2x.png"
              kentCoffeeTable="Kent coffee table"
              rs22500000="Rs. 225,000.00"
            />
            <div className="flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                <img
                  className="h-[17.938rem] w-[17.938rem] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/mask-group-8@2x.png"
                />
              </div>
              <div className="h-[1.5rem] relative inline-block">
                Reclaimed teak Sideboard
              </div>
              <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                Rs. 20,000.00
              </div>
            </div>
            <ProductThreeItems
              maskGroup="/mask-group-9@2x.png"
              kentCoffeeTable="Asgaard sofa"
              rs22500000="Rs. 250,000.00"
              propHeight="unset"
              propDisplay="unset"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[1rem] min-w-[24.625rem] max-w-full mq800:flex-wrap mq800:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.625rem] min-w-[11.875rem] mq450:gap-[1.313rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.981rem]">
              <img
                className="w-[17.938rem] h-[17.938rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/mask-group-10@2x.png"
              />
              <div className="w-[13.25rem] flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="self-stretch h-[3rem] relative inline-block z-[1]">
                  Round coffee table_color 2
                </div>
                <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                  Rs. 251,000.00
                </div>
              </div>
              <img
                className="w-[17.938rem] h-[17.938rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/mask-group-11@2x.png"
              />
              <div className="w-[13.25rem] flex flex-col items-start justify-start gap-[0.687rem]">
                <div className="self-stretch h-[1.5rem] relative inline-block">{`SJP_0825 `}</div>
                <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                  Rs. 200,000.00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.312rem]">
                <img
                  className="h-[17.938rem] w-[17.938rem] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/mask-group-12@2x.png"
                />
              </div>
              <div className="w-[13.25rem] flex flex-col items-start justify-start gap-[0.687rem]">
                <div className="self-stretch relative">
                  Maya sofa three seater
                </div>
                <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                  Rs. 115,000.00
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.625rem] min-w-[12.125rem] mq450:gap-[1.313rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.981rem] mq800:flex-1">
                <img
                  className="w-[17.938rem] h-[17.938rem] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/mask-group-13@2x.png"
                />
                <div className="w-[12.438rem] flex flex-col items-start justify-start gap-[0.75rem]">
                  <div className="self-stretch h-[3rem] relative inline-block z-[1]">
                    Reclaimed teak coffee table
                  </div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                    Rs. 25,200.00
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                  <img
                    className="h-[17.938rem] w-[17.938rem] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/mask-group-14@2x.png"
                  />
                </div>
                <div className="w-[12.438rem] flex flex-col items-start justify-start gap-[0.687rem]">
                  <div className="self-stretch h-[1.5rem] relative inline-block">
                    Bella chair and table
                  </div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                    Rs. 100,000.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.875rem]">
              <img
                className="w-[17.938rem] h-[17.938rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/mask-group-15@2x.png"
              />
              <div className="w-[13.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.625rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.687rem]">
                  <div className="self-stretch h-[1.5rem] relative inline-block">
                    Outdoor sofa set
                  </div>
                  <div className="h-[2.25rem] relative text-[1.5rem] font-medium inline-block mq450:text-[1.188rem]">
                    Rs. 244,000.00
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

export default ProductRow;
