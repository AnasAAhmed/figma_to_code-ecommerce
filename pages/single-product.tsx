import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import GroupComponent9 from "../components/group-component9";
import GroupComponent10 from "../components/group-component10";
import GroupComponent11 from "../components/group-component11";
import GroupComponent12 from "../components/group-component12";
import Footer1 from "../components/footer1";

const SingleProduct: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <FrameComponent3 /> */}
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <GroupComponent9 />
          <GroupComponent10 />
        </section>
        <GroupComponent11 />
        <GroupComponent12 />
      </main>
      {/* <Footer1
        groupFooterMarginTop="unset"
        groupFooterBackgroundColor="#fff"
        aboutTextDecoration="none"
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

export default SingleProduct;
