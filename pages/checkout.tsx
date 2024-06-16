import type { NextPage } from "next";
import Header from "../components/header";
import HeroAccount from "../components/hero-account";
import BillingDetailsForm from "../components/billing-details-form";
import FreeDeliverySection from "../components/free-delivery-section";
import Footer3 from "../components/footer3";

const Checkout: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[193.75rem] overflow-hidden text-left text-[1rem] text-black font-poppins">
      {/* <Header /> */}
      <HeroAccount
        myAccount="Checkout"
        myAccount1="Checkout"
        propLeft="37.75rem"
        propWidth="14.563rem"
        propLeft1="4.875rem"
        propWidth1="9.813rem"
      />
      <div className="absolute top-[26rem] left-[0rem] w-[90rem] h-[114.313rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[114.313rem]" />
        <div className="absolute top-[3.938rem] left-[6.25rem] w-[77.625rem] h-[107.125rem]">
          <BillingDetailsForm />
          <div className="absolute top-[0rem] left-[39.625rem] w-[38rem] h-[49.313rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-white w-[38rem] h-[49.313rem]" />
            <div className="absolute top-[5.438rem] left-[2.375rem] w-[33.313rem] h-[38.5rem]">
              <div className="absolute top-[34.5rem] left-[6.938rem] w-[19.875rem] h-[4rem] text-[1.25rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-mini box-border w-[19.875rem] h-[4rem] border-[1px] border-solid border-black" />
                <div className="absolute top-[1.063rem] left-[6.375rem]">
                  Place order
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] text-[1.5rem] font-medium">
                Product
              </div>
              <div className="absolute top-[0rem] left-[26.875rem] text-[1.5rem] font-medium">
                Subtotal
              </div>
              <b className="absolute top-[8.5rem] left-[22.188rem] text-[1.5rem] text-darkgoldenrod">
                Rs. 250,000.00
              </b>
              <div className="absolute top-[6rem] left-[0.063rem]">
                Subtotal
              </div>
              <div className="absolute top-[8.875rem] left-[0.063rem]">
                Total
              </div>
              <div className="absolute top-[3.125rem] left-[0.063rem] text-darkgray">
                Asgaard sofa
              </div>
              <div className="absolute top-[3.313rem] left-[7.5rem] text-[0.75rem] font-medium">
                X
              </div>
              <div className="absolute top-[3.313rem] left-[8.625rem] text-[0.75rem] font-medium">
                1
              </div>
              <div className="absolute top-[3.125rem] left-[26.25rem] font-light">
                Rs. 250,000.00
              </div>
              <div className="absolute top-[6rem] left-[26.5rem] font-light">
                Rs. 250,000.00
              </div>
              <div className="absolute top-[27.563rem] left-[0rem] text-justify inline-block w-[33.063rem]">
                <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
                <span className="font-semibold">privacy policy.</span>
              </div>
              <div className="absolute top-[12.844rem] left-[0.125rem] box-border w-[33rem] h-[0.063rem] border-t-[1px] border-solid border-gainsboro-200" />
              <div className="absolute top-[14.25rem] left-[0.063rem] w-[33rem] h-[6.688rem]">
                <div className="absolute top-[0rem] left-[1.875rem]">
                  Direct Bank Transfer
                </div>
                <div className="absolute top-[2.188rem] left-[0rem] font-light text-darkgray text-justify inline-block w-[33rem]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </div>
                <div className="absolute top-[0.313rem] left-[0.063rem] rounded-[50%] bg-black w-[0.875rem] h-[0.875rem]" />
              </div>
              <div className="absolute top-[22.5rem] left-[0.125rem] w-[11.938rem] h-[1.5rem] text-darkgray">
                <div className="absolute top-[0rem] left-[1.813rem] font-medium">
                  Direct Bank Transfer
                </div>
                <div className="absolute top-[0.313rem] left-[0rem] rounded-[50%] box-border w-[0.875rem] h-[0.875rem] border-[1px] border-solid border-darkgray" />
              </div>
              <div className="absolute top-[24.688rem] left-[0.125rem] w-[10.438rem] h-[1.5rem] text-darkgray">
                <div className="absolute top-[0rem] left-[1.813rem] font-medium">
                  Cash On Delivery
                </div>
                <div className="absolute top-[0.313rem] left-[0rem] rounded-[50%] box-border w-[0.875rem] h-[0.875rem] border-[1px] border-solid border-darkgray" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreeDeliverySection propTop="140.313rem" />
      {/* <Footer3 propTop="159.063rem" /> */}
    </div>
  );
};

export default Checkout;
