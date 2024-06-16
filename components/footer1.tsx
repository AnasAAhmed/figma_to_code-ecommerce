import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Footer1Type = {
  className?: string;

  /** Style props */
  groupFooterMarginTop?: CSSProperties["marginTop"];
  groupFooterBackgroundColor?: CSSProperties["backgroundColor"];
  aboutTextDecoration?: CSSProperties["textDecoration"];
  addressDetailsWidth?: CSSProperties["width"];
  universityDriveSuiteContaHeight?: CSSProperties["height"];
  universityDriveSuiteContaDisplay?: CSSProperties["display"];
  linksHeight?: CSSProperties["height"];
  linksMinWidth?: CSSProperties["minWidth"];
  homeHeight?: CSSProperties["height"];
  homeMinWidth?: CSSProperties["minWidth"];
  shopDisplay?: CSSProperties["display"];
  shopMinWidth?: CSSProperties["minWidth"];
  aboutHeight?: CSSProperties["height"];
  aboutMinWidth?: CSSProperties["minWidth"];
  contactHeight?: CSSProperties["height"];
  contactMinWidth?: CSSProperties["minWidth"];
  helpDisplay?: CSSProperties["display"];
  helpMinWidth?: CSSProperties["minWidth"];
  newsletterHeight?: CSSProperties["height"];
  newsletterMinWidth?: CSSProperties["minWidth"];
  enterYourEmailHeight?: CSSProperties["height"];
  enterYourEmailDisplay?: CSSProperties["display"];
  returnsHeight?: CSSProperties["height"];
  returnsMinWidth?: CSSProperties["minWidth"];
  privacyPoliciesDisplay?: CSSProperties["display"];
  privacyPoliciesMinWidth?: CSSProperties["minWidth"];
};

const Footer1: NextPage<Footer1Type> = ({
  className = "",
  groupFooterMarginTop,
  groupFooterBackgroundColor,
  aboutTextDecoration,
  addressDetailsWidth,
  universityDriveSuiteContaHeight,
  universityDriveSuiteContaDisplay,
  linksHeight,
  linksMinWidth,
  homeHeight,
  homeMinWidth,
  shopDisplay,
  shopMinWidth,
  aboutHeight,
  aboutMinWidth,
  contactHeight,
  contactMinWidth,
  helpDisplay,
  helpMinWidth,
  newsletterHeight,
  newsletterMinWidth,
  enterYourEmailHeight,
  enterYourEmailDisplay,
  returnsHeight,
  returnsMinWidth,
  privacyPoliciesDisplay,
  privacyPoliciesMinWidth,
}) => {
  const groupFooterStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: groupFooterMarginTop,
      backgroundColor: groupFooterBackgroundColor,
    };
  }, [groupFooterMarginTop, groupFooterBackgroundColor]);

  const about1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: aboutTextDecoration,
      height: aboutHeight,
      minWidth: aboutMinWidth,
    };
  }, [aboutTextDecoration, aboutHeight, aboutMinWidth]);

  const addressDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: addressDetailsWidth,
    };
  }, [addressDetailsWidth]);

  const universityDriveSuiteContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: universityDriveSuiteContaHeight,
      display: universityDriveSuiteContaDisplay,
    };
  }, [universityDriveSuiteContaHeight, universityDriveSuiteContaDisplay]);

  const linksStyle: CSSProperties = useMemo(() => {
    return {
      height: linksHeight,
      minWidth: linksMinWidth,
    };
  }, [linksHeight, linksMinWidth]);

  const home1Style: CSSProperties = useMemo(() => {
    return {
      height: homeHeight,
      minWidth: homeMinWidth,
    };
  }, [homeHeight, homeMinWidth]);

  const shop1Style: CSSProperties = useMemo(() => {
    return {
      display: shopDisplay,
      minWidth: shopMinWidth,
    };
  }, [shopDisplay, shopMinWidth]);

  const contact1Style: CSSProperties = useMemo(() => {
    return {
      height: contactHeight,
      minWidth: contactMinWidth,
    };
  }, [contactHeight, contactMinWidth]);

  const helpStyle: CSSProperties = useMemo(() => {
    return {
      display: helpDisplay,
      minWidth: helpMinWidth,
    };
  }, [helpDisplay, helpMinWidth]);

  const newsletterStyle: CSSProperties = useMemo(() => {
    return {
      height: newsletterHeight,
      minWidth: newsletterMinWidth,
    };
  }, [newsletterHeight, newsletterMinWidth]);

  const enterYourEmailStyle: CSSProperties = useMemo(() => {
    return {
      height: enterYourEmailHeight,
      display: enterYourEmailDisplay,
    };
  }, [enterYourEmailHeight, enterYourEmailDisplay]);

  const returnsStyle: CSSProperties = useMemo(() => {
    return {
      height: returnsHeight,
      minWidth: returnsMinWidth,
    };
  }, [returnsHeight, returnsMinWidth]);

  const privacyPoliciesStyle: CSSProperties = useMemo(() => {
    return {
      display: privacyPoliciesDisplay,
      minWidth: privacyPoliciesMinWidth,
    };
  }, [privacyPoliciesDisplay, privacyPoliciesMinWidth]);

  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start pt-[6.125rem] px-[6.25rem] pb-[2.375rem] box-border gap-[3rem] max-w-full z-[8] mt-[-0.313rem] text-left text-[1rem] text-darkgray font-poppins mq750:gap-[1.5rem] mq750:pl-[3.125rem] mq750:pr-[3.125rem] mq750:pb-[1.563rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
      style={groupFooterStyle}
    >
      <div className="w-[90rem] h-[34.688rem] relative bg-white hidden max-w-full" />
      <div className="w-[70.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1225:flex-wrap">
          <div
            className="flex flex-col items-start justify-start pt-[6.75rem] px-[0rem] pb-[0rem]"
            style={addressDetailsStyle}
          >
            <p
              className="m-0 h-[4.5rem] relative inline-block z-[1]"
              style={universityDriveSuiteContainerStyle}
            >
              <span className="block">
                400 University Drive Suite 200 Coral Gables,
              </span>
              <span className="block">FL 33134 USA</span>
            </p>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] gap-[3.437rem]">
            <div
              className="h-[1.5rem] relative font-medium inline-block z-[1]"
              style={linksStyle}
            >
              Links
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] text-black">
              <div className="flex flex-col items-start justify-start gap-[2.856rem]">
                <div
                  className="h-[1.5rem] relative font-medium inline-block z-[1]"
                  style={home1Style}
                >
                  Home
                </div>
                <div className="relative font-medium z-[1]" style={shop1Style}>
                  Shop
                </div>
                <a
                  className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]"
                  style={about1Style}
                >
                  About
                </a>
                <div
                  className="h-[1.5rem] relative font-medium inline-block z-[1]"
                  style={contact1Style}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="w-[31.125rem] flex flex-col items-start justify-start gap-[3.312rem] max-w-full mq750:gap-[1.625rem]">
            <div className="w-[18.625rem] flex flex-row items-start justify-between gap-[1.25rem]">
              <div className="relative font-medium z-[1]" style={helpStyle}>
                Help
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div
                  className="h-[1.5rem] relative font-medium inline-block z-[1]"
                  style={newsletterStyle}
                >
                  Newsletter
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.781rem] text-black mq750:gap-[1.375rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[4.5rem] mq750:flex-wrap mq750:gap-[2.25rem]">
                <div className="relative font-medium z-[1]">
                  Payment Options
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[0.687rem] min-w-[11.625rem] text-[0.875rem] text-darkgray">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem]">
                    <div
                      className="h-[1.313rem] relative inline-block z-[1]"
                      style={enterYourEmailStyle}
                    >
                      Enter Your Email Address
                    </div>
                    <div className="self-stretch h-[0.125rem] relative box-border z-[1] border-t-[1px] border-solid border-black" />
                  </div>
                  <div className="w-[4.688rem] flex flex-col items-start justify-start gap-[0.187rem]">
                    <input
                      className="w-full [border:none] [outline:none] font-medium font-poppins text-[0.875rem] bg-[transparent] self-stretch h-[1.313rem] relative text-black text-left inline-block min-w-[2.813rem] p-0 z-[1]"
                      placeholder="SUBSCRIBE"
                      type="text"
                    />
                    <div className="w-[4.813rem] h-[0.125rem] relative box-border z-[1] border-t-[1px] border-solid border-black" />
                  </div>
                </div>
              </div>
              <div
                className="h-[1.5rem] relative font-medium inline-block z-[1]"
                style={returnsStyle}
              >
                Returns
              </div>
              <div
                className="relative font-medium z-[1]"
                style={privacyPoliciesStyle}
              >
                Privacy Policies
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.125rem] text-black mq750:gap-[1.063rem]">
        <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-200" />
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="relative z-[1]">
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
