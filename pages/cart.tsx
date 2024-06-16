import type { NextPage } from "next";
import Navbar from "../components/navbar";
import HeroCart from "../components/hero-cart";
import ProductInfo from "../components/product-info";
import CartTotal from "../components/cart-total";
import GroupComponent7 from "../components/group-component7";
import Footer2 from "../components/footer2";

const Cart: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <Navbar
        groupHeaderBackgroundColor="#fff"
        rectangleDivBackgroundColor="#fff"
        homeHeight="1.5rem"
        homeMinWidth="unset"
        shopDisplay="unset"
        shopMinWidth="unset"
        aboutHeight="1.5rem"
        aboutMinWidth="unset"
        contactHeight="1.5rem"
        contactMinWidth="unset"
      /> */}
      <HeroCart />
      <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[4.5rem] px-[6.25rem] pb-[3.937rem] box-border gap-[1.875rem] max-w-full text-left text-[1rem] text-darkgray font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[0.938rem] mq800:pt-[2.938rem] mq800:px-[3.125rem] mq800:pb-[2.563rem] mq800:box-border mq1350:flex-wrap">
        <div className="h-[32.813rem] w-[90rem] relative bg-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[3.437rem] max-w-full mq450:gap-[1.688rem] mq800:min-w-full">
          <ProductInfo />
          <div className="w-[49.5rem] flex flex-row items-start justify-start gap-[2.25rem] max-w-full mq450:gap-[1.125rem] mq800:flex-wrap">
            <img
              className="h-[6.625rem] w-[6.625rem] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/group-137@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.312rem] px-[0rem] pb-[0rem] box-border min-w-[26.375rem] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[0.812rem] pl-[0rem]">
                  <div className="relative z-[1]">Asgaard sofa</div>
                </div>
                <div className="w-[8.75rem] flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                  <div className="relative z-[1]">Rs. 250,000.00</div>
                </div>
                <div className="rounded-8xs flex flex-row items-start justify-start py-[0.125rem] px-[0.812rem] z-[1] text-black border-[1px] border-solid border-darkgray">
                  <div className="h-[2rem] w-[2rem] relative rounded-8xs box-border hidden border-[1px] border-solid border-darkgray" />
                  <div className="h-[1.5rem] relative inline-block z-[1]">
                    1
                  </div>
                </div>
                <div className="w-[11.813rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border text-black">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <div className="relative z-[1]">Rs. 250,000.00</div>
                    </div>
                    <img
                      className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/antdesigndeletefilled.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartTotal />
      </section>
      <GroupComponent7
        freeDeliveryHeight="3rem"
        freeDeliveryDisplay="inline-block"
        daysReturnHeight="3rem"
        daysReturnDisplay="inline-block"
        securePaymentHeight="3rem"
        securePaymentDisplay="inline-block"
      />
      {/* <Footer2 /> */}
    </div>
  );
};

export default Cart;
