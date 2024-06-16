import type { NextPage } from "next";

export type BillingDetailsFormType = {
  className?: string;
};

const BillingDetailsForm: NextPage<BillingDetailsFormType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0rem] left-[0rem] w-[38rem] h-[107.125rem] text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[38rem] h-[107.125rem]" />
      <div className="absolute top-[2.188rem] left-[4.625rem] text-[2.25rem] font-semibold">
        Billing details
      </div>
      <div className="absolute top-[7.813rem] left-[4.688rem] w-[13.25rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          First Name
        </div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[13.188rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[7.813rem] left-[19.813rem] font-medium">
        Last Name
      </div>
      <div className="absolute top-[10.688rem] left-[19.875rem] rounded-3xs bg-white box-border w-[13.188rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      <div className="absolute top-[17.625rem] left-[4.688rem] font-medium">
        Company Name (Optional)
      </div>
      <div className="absolute top-[20.5rem] left-[4.75rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      <div className="absolute top-[37.25rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Street address
        </div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[66.688rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          ZIP code
        </div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[47.063rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Town / City
        </div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[76.5rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">Phone</div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[86.313rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Email address
        </div>
        <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[98rem] left-[4.75rem] w-[28.313rem] h-[4.688rem] text-darkgray">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
        <div className="absolute top-[1.625rem] left-[1.813rem]">
          Additional information
        </div>
      </div>
      <div className="absolute top-[27.438rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[28.375rem] h-[7.563rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Country / Region
          </div>
          <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
        </div>
        <div className="absolute top-[4.5rem] left-[1.938rem] text-darkgray">
          Sri Lanka
        </div>
        <img
          className="absolute top-[4.625rem] left-[25.438rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
      <div className="absolute top-[56.875rem] left-[4.688rem] w-[28.375rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[28.375rem] h-[7.563rem]">
          <div className="absolute top-[0rem] left-[0rem] font-medium">
            Province
          </div>
          <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[28.313rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
          <div className="absolute top-[4.5rem] left-[1.938rem] text-darkgray">
            Western Province
          </div>
        </div>
        <img
          className="absolute top-[4.625rem] left-[25.438rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
          alt=""
          src="/dashiconsarrowdownalt2.svg"
        />
      </div>
    </div>
  );
};

export default BillingDetailsForm;
