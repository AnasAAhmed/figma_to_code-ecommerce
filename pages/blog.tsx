import type { NextPage } from "next";
import Navbar from "../components/navbar";
import GroupComponent14 from "../components/group-component14";
import BlogPostList from "../components/blog-post-list";
import Pagination from "../components/pagination";
import GroupComponent7 from "../components/group-component7";
import Footer1 from "../components/footer1";

const Blog: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <Navbar
        groupHeaderBackgroundColor="#fff"
        rectangleDivBackgroundColor="#fff"
        homeHeight="unset"
        homeMinWidth="3rem"
        shopDisplay="inline-block"
        shopMinWidth="2.625rem"
        aboutHeight="unset"
        aboutMinWidth="3.063rem"
        contactHeight="unset"
        contactMinWidth="4.125rem"
      /> */}
      <GroupComponent14 />
      <section className="self-stretch bg-white flex flex-col items-center justify-start pt-[5.25rem] pb-[0rem] pr-[1.437rem] pl-[1.25rem] box-border gap-[3.375rem] max-w-full mq800:gap-[1.688rem] mq800:pt-[1.438rem] mq800:box-border mq1350:pt-[2.25rem] mq1350:box-border">
        <div className="w-[90rem] h-[169.375rem] relative bg-white hidden max-w-full" />
        <BlogPostList />
        <Pagination />
      </section>
      <GroupComponent7
        freeDeliveryHeight="unset"
        freeDeliveryDisplay="unset"
        daysReturnHeight="unset"
        daysReturnDisplay="unset"
        securePaymentHeight="unset"
        securePaymentDisplay="unset"
      />
      {/* <Footer1
        groupFooterMarginTop="unset"
        groupFooterBackgroundColor="#fff"
        aboutTextDecoration="unset"
        addressDetailsWidth="17.813rem"
        universityDriveSuiteContaHeight="unset"
        universityDriveSuiteContaDisplay="unset"
        linksHeight="unset"
        linksMinWidth="2.5rem"
        homeHeight="unset"
        homeMinWidth="3rem"
        shopDisplay="inline-block"
        shopMinWidth="2.625rem"
        aboutHeight="unset"
        aboutMinWidth="3.063rem"
        contactHeight="unset"
        contactMinWidth="4.125rem"
        helpDisplay="inline-block"
        helpMinWidth="2.313rem"
        newsletterHeight="unset"
        newsletterMinWidth="5.375rem"
        enterYourEmailHeight="unset"
        enterYourEmailDisplay="unset"
        returnsHeight="unset"
        returnsMinWidth="3.875rem"
        privacyPoliciesDisplay="inline-block"
        privacyPoliciesMinWidth="7.75rem"
      /> */}
    </div>
  );
};

export default Blog;
