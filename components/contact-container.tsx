import type { NextPage } from "next";

export type ContactContainerType = {
  className?: string;
};

const ContactContainer: NextPage<ContactContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[4.25rem] left-[0rem] w-[24.563rem] h-[33.563rem] text-left text-[1.5rem] text-black font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] bg-white w-[24.563rem] h-[33.563rem]" />
      <img
        className="absolute h-[5.25%] w-[5.6%] top-[11.55%] right-[80.66%] bottom-[83.2%] left-[13.74%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[13.188rem] left-[2.875rem] w-[1.875rem] h-[1.875rem] overflow-hidden"
        alt=""
        src="/bxsphone.svg"
      />
      <div className="absolute top-[3.625rem] left-[6.625rem] font-medium">
        Address
      </div>
      <div className="absolute top-[20.875rem] left-[6.625rem] font-medium">
        Working Time
      </div>
      <div className="absolute top-[13rem] left-[6.625rem] font-medium">
        Phone
      </div>
      <div className="absolute top-[5.875rem] left-[6.625rem] text-[1rem] inline-block w-[13.25rem]">
        236 5th SE Avenue, New York NY10000, United States
      </div>
      <div className="absolute top-[23.125rem] left-[6.625rem] text-[1rem] inline-block w-[13.25rem]">
        <p className="m-0">Monday-Friday: 9:00 - 22:00</p>
        <p className="m-0">Saturday-Sunday: 9:00 - 21:00</p>
      </div>
      <div className="absolute top-[15.25rem] left-[6.625rem] text-[1rem] inline-block w-[13.25rem]">
        <p className="m-0">Mobile: +(84) 546-6789</p>
        <p className="m-0">Hotline: +(84) 456-6789</p>
      </div>
      <img
        className="absolute top-[21.25rem] left-[3.313rem] w-[1.438rem] h-[1.438rem] overflow-hidden"
        alt=""
        src="/biclockfill.svg"
      />
    </div>
  );
};

export default ContactContainer;
