import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolut top-[0rem] left-[0rem] w-[90rem] h-[6.25rem] text-left text-[1rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[6.25rem]" />
      <div className="absolute top-[2.375rem] left-[31.563rem] w-[26.875rem] h-[1.5rem]">
        <div className="absolute top-[0rem] left-[0rem] font-medium">Home</div>
        <div className="absolute top-[0rem] left-[7.688rem] font-medium">
          Shop
        </div>
        <div className="absolute top-[0rem] left-[15rem] font-medium">
          About
        </div>
        <div className="absolute top-[0rem] left-[22.75rem] font-medium">
          Contact
        </div>
      </div>
      <div className="absolute top-[2.25rem] left-[68.313rem] w-[15.438rem] h-[1.75rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/mdiaccountalertoutline.svg"
        />
        <img
          className="absolute top-[0rem] left-[4.563rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/akariconssearch.svg"
        />
        <img
          className="absolute top-[0rem] left-[9.125rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/akariconsheart.svg"
        />
        <img
          className="absolute top-[0rem] left-[13.688rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/antdesignshoppingcartoutlined.svg"
        />
      </div>
    </div>
  );
};

export default Header;
