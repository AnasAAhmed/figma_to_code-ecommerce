import type { NextPage } from "next";

export type RegisterContainerType = {
  className?: string;
};

const RegisterContainer: NextPage<RegisterContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[3.938rem] left-[45.875rem] w-[38rem] h-[39.375rem] text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[38rem] h-[39.375rem]" />
      <div className="absolute top-[31.75rem] left-[4.813rem] w-[13.438rem] h-[4rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-[13.438rem] h-[4rem] border-[1px] border-solid border-black" />
        <div className="absolute top-[1.063rem] left-[4.188rem]">Register</div>
      </div>
      <div className="absolute top-[2.188rem] left-[4.688rem] text-[2.25rem] font-semibold">
        Register
      </div>
      <div className="absolute top-[7.813rem] left-[4.75rem] w-[26.5rem] h-[7.563rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">
          Email address
        </div>
        <input type="text" className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[26.438rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
      </div>
      <div className="absolute top-[17.625rem] left-[4.813rem] font-light text-justify inline-block w-[28.313rem]">
        A link to set a new password will be sent to your email address.
      </div>
      <div className="absolute top-[21.75rem] left-[4.813rem] text-justify inline-block w-[28.313rem]">
        <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
        <span className="font-semibold">privacy policy.</span>
      </div>
    </div>
  );
};

export default RegisterContainer;
