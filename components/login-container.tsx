import type { NextPage } from "next";

export type LoginContainerType = {
  className?: string;
};

const LoginContainer: NextPage<LoginContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3.938rem] left-[6.25rem] w-[38rem] h-[39.375rem] text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[38rem] h-[39.375rem]" />
      <div className="absolute top-[27.813rem] left-[4.75rem] rounded-8xs bg-white box-border w-[1.875rem] h-[1.688rem] border-[1px] border-solid border-darkgray" />
      <div className="absolute top-[31.75rem] left-[4.5rem] w-[13.438rem] h-[4rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-[13.438rem] h-[4rem] border-[1px] border-solid border-black" />
        <div className="absolute top-[1.063rem] left-[4.938rem]">Log In</div>
      </div>
      <div className="absolute top-[2.188rem] left-[4.625rem] text-[2.25rem] font-semibold">
        Log In
      </div>
      <div className="absolute top-[7.813rem] left-[4.688rem] w-[26.5rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Username or email address
        </div>
        <input type="text" className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[26.438rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[17.625rem] left-[4.688rem] w-[26.5rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Password
        </div>
        <input type="text" className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[26.438rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[27.875rem] left-[7.938rem]">
        Remember me
      </div>
      <div className="absolute top-[33.188rem] left-[19.875rem] font-light">
        Lost Your Password?
      </div>
    </div>
  );
};

export default LoginContainer;
