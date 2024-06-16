import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Content from "../components/content";
import GroupComponent8 from "../components/group-component8";
import Products from "../components/products";
import ProductRow from "../components/product-row";
import Footer from "../components/footer";
import GroupComponent7 from "../components/group-component7";
import Footer1 from "../components/footer1";

const Shop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem] box-border leading-[normal] tracking-[normal]">
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
      <Content />
      <div className="self-stretch h-[48.563rem] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7.312rem] box-border gap-[1rem] max-w-full mq450:pb-[2rem] mq450:box-border mq1150:pb-[3.063rem] mq1150:box-border mq1350:pb-[4.75rem] mq1350:box-border">
        <GroupComponent8 />
        <Products />
        <ProductRow />
      </section>
      <Footer />
      <GroupComponent7 />
      {/* <Footer1
        groupFooterMarginTop="unset"
        groupFooterBackgroundColor="#fff"
        aboutTextDecoration="unset"
        addressDetailsWidth="unset"
        universityDriveSuiteContaHeight="4.5rem"
        universityDriveSuiteContaDisplay="inline-block"
        linksHeight="1.5rem"
        linksMinWidth="unset"
        homeHeight="1.5rem"
        homeMinWidth="unset"
        shopDisplay="unset"
        shopMinWidth="unset"
        aboutHeight="1.5rem"
        aboutMinWidth="unset"
        contactHeight="1.5rem"
        contactMinWidth="unset"
        helpDisplay="unset"
        helpMinWidth="unset"
        newsletterHeight="1.5rem"
        newsletterMinWidth="unset"
        enterYourEmailHeight="1.313rem"
        enterYourEmailDisplay="inline-block"
        returnsHeight="1.5rem"
        returnsMinWidth="unset"
        privacyPoliciesDisplay="unset"
        privacyPoliciesMinWidth="unset"
      /> */}
    </div>
  );
};

export default Shop;
