import type { NextPage } from "next";
import Header from "../components/header";
import HeroAccount from "../components/hero-account";
import FreeDeliverySection from "../components/free-delivery-section";
import Footer3 from "../components/footer3";
import ContactContainer from "../components/contact-container";

const Contact: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[150.938rem] overflow-hidden text-left text-[1rem] text-black font-poppins">
      {/* <Header /> */}
      <HeroAccount
        myAccount="Contact"
        myAccount1="Contact"
        propLeft="38.875rem"
        propWidth="12.25rem"
        propLeft1="3.75rem"
        propWidth1="9.063rem"
      />
      <FreeDeliverySection propTop="97.5rem" />
      {/* <Footer3 propTop="116.25rem" /> */}
      <div className="absolute top-[26rem] left-[0rem] w-[90rem] h-[71.5rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[71.5rem]" />
        <div className="absolute top-[6.125rem] left-[33.313rem] text-[2.25rem] font-semibold">
          Get In Touch With Us
        </div>
        <div className="absolute top-[9.938rem] left-[24.875rem] text-darkgray text-center inline-block w-[40.25rem]">{`For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`}</div>
        <div className="absolute top-[13.813rem] left-[11.938rem] w-[66.125rem] h-[57.688rem]">
          <ContactContainer />
          <div className="absolute top-[0rem] left-[26.438rem] w-[39.688rem] h-[57.688rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[39.688rem] h-[57.688rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-white w-[39.688rem] h-[57.688rem]" />
              <div className="absolute top-[7.438rem] left-[4.625rem] w-[33.188rem] h-[45.875rem]">
                <div className="absolute top-[42.875rem] left-[0.438rem] w-[14.813rem] h-[3rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-[14.813rem] h-[3rem] border-[1px] border-solid border-black" />
                  <div className="absolute top-[0.75rem] left-[5.563rem] inline-block w-[3.7rem]">
                    Sbumit
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0.063rem] w-[33.125rem] h-[7.563rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium inline-block w-[6.956rem]">
                    Your name
                  </div>
                  <div className="absolute top-[2.875rem] left-[0.081rem] rounded-3xs bg-white box-border w-[33.05rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
                </div>
                <div className="absolute top-[9.813rem] left-[0.063rem] w-[33.125rem] h-[7.563rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium inline-block w-[8.988rem]">
                    Email address
                  </div>
                  <div className="absolute top-[2.875rem] left-[0.081rem] rounded-3xs bg-white box-border w-[33.05rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
                  <div className="absolute top-[4.5rem] left-[1.938rem] text-darkgray">
                    Abc@def.com
                  </div>
                </div>
                <div className="absolute top-[19.625rem] left-[0.188rem] w-[33rem] h-[7.563rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium inline-block w-[4.75rem]">
                    Subject
                  </div>
                  <div className="absolute top-[2.875rem] left-[0.075rem] rounded-3xs bg-white box-border w-[32.925rem] h-[4.688rem] border-[1px] border-solid border-darkgray" />
                  <div className="absolute top-[4.5rem] left-[1.938rem] text-darkgray">
                    This is an optional
                  </div>
                </div>
                <div className="absolute top-[29.438rem] left-[0rem] w-[33rem] h-[10.375rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium inline-block w-[4.75rem]">
                    Message
                  </div>
                  <div className="absolute top-[2.875rem] left-[0.063rem] rounded-3xs bg-white box-border w-[32.938rem] h-[7.5rem] border-[1px] border-solid border-darkgray" />
                  <div className="absolute top-[4.5rem] left-[1.938rem] text-darkgray">
                    Hi! i’d like to ask about
                  </div>
                </div>
                <div className="absolute top-[4.5rem] left-[2rem] text-darkgray">
                  Abc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
