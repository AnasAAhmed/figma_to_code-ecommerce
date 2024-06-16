import type { NextPage } from "next";

export type CartTotalType = {
  className?: string;
};

const CartTotal: NextPage<CartTotalType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[24.563rem] bg-oldlace-200 flex flex-col items-start justify-start pt-[0.937rem] px-[4.687rem] pb-[5rem] box-border gap-[3.812rem] min-w-[24.563rem] max-w-full z-[1] text-left text-[2rem] text-black font-poppins mq450:gap-[1.875rem] mq450:pt-[1.25rem] mq450:px-[1.25rem] mq450:pb-[3.25rem] mq450:box-border mq800:min-w-full mq1350:flex-1 ${className}`}
    >
      <div className="w-[24.563rem] h-[24.375rem] relative bg-oldlace-200 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-[0rem] px-[1.312rem]">
        <h1 className="m-0 h-[3rem] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-[1.188rem] mq800:text-[1.625rem]">
          Cart Totals
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[2.625rem] text-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.937rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
              Subtotal
            </div>
            <div className="relative text-darkgray z-[1]">Rs. 250,000.00</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="h-[1.5rem] relative font-medium inline-block z-[1]">
              Total
            </div>
            <div className="h-[1.875rem] relative text-[1.25rem] font-medium text-darkgoldenrod inline-block z-[1] mq450:text-[1rem]">
              Rs. 250,000.00
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.625rem] pl-[0.687rem]">
          <button className="cursor-pointer pt-[0.75rem] pb-[0.812rem] pr-[3.625rem] pl-[3.687rem] bg-[transparent] flex-1 rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="h-[3.688rem] w-[13.875rem] relative rounded-mini box-border hidden border-[1px] border-solid border-black" />
            <div className="h-[1.875rem] relative text-[1.25rem] font-poppins text-black text-left inline-block z-[1]">
              Check Out
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
