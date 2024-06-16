import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent7Type = {
  className?: string;

  /** Style props */
  freeDeliveryHeight?: CSSProperties["height"];
  freeDeliveryDisplay?: CSSProperties["display"];
  daysReturnHeight?: CSSProperties["height"];
  daysReturnDisplay?: CSSProperties["display"];
  securePaymentHeight?: CSSProperties["height"];
  securePaymentDisplay?: CSSProperties["display"];
};

const GroupComponent7: NextPage<GroupComponent7Type> = ({
  className = "",
  freeDeliveryHeight,
  freeDeliveryDisplay,
  daysReturnHeight,
  daysReturnDisplay,
  securePaymentHeight,
  securePaymentDisplay,
}) => {
  const freeDeliveryStyle: CSSProperties = useMemo(() => {
    return {
      height: freeDeliveryHeight,
      display: freeDeliveryDisplay,
    };
  }, [freeDeliveryHeight, freeDeliveryDisplay]);

  const daysReturnStyle: CSSProperties = useMemo(() => {
    return {
      height: daysReturnHeight,
      display: daysReturnDisplay,
    };
  }, [daysReturnHeight, daysReturnDisplay]);

  const securePaymentStyle: CSSProperties = useMemo(() => {
    return {
      height: securePaymentHeight,
      display: securePaymentDisplay,
    };
  }, [securePaymentHeight, securePaymentDisplay]);

  return (
    <section
      className={`self-stretch bg-snow-200 flex flex-row items-start justify-start py-[6rem] px-[6.25rem] box-border gap-[2.875rem] max-w-full text-left text-[2rem] text-black font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[1.438rem] mq800:pl-[3.125rem] mq800:pr-[3.125rem] mq800:box-border mq1350:flex-wrap mq1350:justify-center ${className}`}
    >
      <div className="h-[18.75rem] w-[90rem] relative bg-snow-200 hidden max-w-full" />
      <div className="w-[23.5rem] flex flex-col items-start justify-start max-w-full">
        <h1
          className="m-0 h-[3rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem] mq800:text-[1.625rem]"
          style={freeDeliveryStyle}
        >
          Free Delivery
        </h1>
        <p className="m-0 self-stretch relative text-[1.25rem] text-darkgray z-[1] mq450:text-[1rem]">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="w-[23.5rem] flex flex-col items-start justify-start max-w-full">
        <h1
          className="m-0 h-[3rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem] mq800:text-[1.625rem]"
          style={daysReturnStyle}
        >
          90 Days Return
        </h1>
        <p className="m-0 self-stretch relative text-[1.25rem] text-darkgray z-[1] mq450:text-[1rem]">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="w-[23.5rem] flex flex-col items-start justify-start max-w-full">
        <h1
          className="m-0 h-[3rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[1.188rem] mq800:text-[1.625rem]"
          style={securePaymentStyle}
        >
          Secure Payment
        </h1>
        <p className="m-0 self-stretch relative text-[1.25rem] text-darkgray z-[1] mq450:text-[1rem]">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </section>
  );
};

export default GroupComponent7;
