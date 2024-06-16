import type { NextPage } from "next";
import Header from "../components/header";
import HeroAccount from "../components/hero-account";
import LoginContainer from "../components/login-container";
import RegisterContainer from "../components/register-container";
import FreeDeliverySection from "../components/free-delivery-section";
import Footer3 from "../components/footer3";

const MyAccount: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[126.938rem] overflow-hidden">
      {/* <Header /> */}
      <HeroAccount myAccount="My Account" myAccount1="My account" />
      <div className="absolute top-[26rem] left-[0rem] w-[90rem] h-[47.5rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[90rem] h-[47.5rem]" />
        <LoginContainer />
        <RegisterContainer />
      </div>
      <FreeDeliverySection />
      {/* <Footer3 /> */}
    </div>
  );
};

export default MyAccount;
