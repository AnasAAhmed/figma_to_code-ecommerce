import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

export type NavbarType = {
  className?: string;

  /** Style props */
  groupHeaderBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  homeHeight?: CSSProperties["height"];
  homeMinWidth?: CSSProperties["minWidth"];
  shopDisplay?: CSSProperties["display"];
  shopMinWidth?: CSSProperties["minWidth"];
  aboutHeight?: CSSProperties["height"];
  aboutMinWidth?: CSSProperties["minWidth"];
  contactHeight?: CSSProperties["height"];
  contactMinWidth?: CSSProperties["minWidth"];
};

const Navbar: NextPage<NavbarType> = ({
  className = "",
  groupHeaderBackgroundColor,
  rectangleDivBackgroundColor,
  homeHeight,
  homeMinWidth,
  shopDisplay,
  shopMinWidth,
  aboutHeight,
  aboutMinWidth,
  contactHeight,
  contactMinWidth,
}) => {
  const groupHeaderStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: groupHeaderBackgroundColor,
    };
  }, [groupHeaderBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      height: homeHeight,
      minWidth: homeMinWidth,
    };
  }, [homeHeight, homeMinWidth]);

  const shopStyle: CSSProperties = useMemo(() => {
    return {
      display: shopDisplay,
      minWidth: shopMinWidth,
    };
  }, [shopDisplay, shopMinWidth]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      height: aboutHeight,
      minWidth: aboutMinWidth,
    };
  }, [aboutHeight, aboutMinWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      height: contactHeight,
      minWidth: contactMinWidth,
    };
  }, [contactHeight, contactMinWidth]);

  return (
    <header
      className={`self-stretch bg-white flex flex-row items-start justify-center py-[1.25rem] pr-[1.25rem] pl-[26.562rem] box-border gap-[9.875rem] top-[0] z-[99] sticky max-w-full mq750:gap-[2.438rem] mq750:pl-[6.625rem] mq750:box-border mq450:gap-[1.25rem] mq450:pl-[1.25rem] mq450:box-border mq1225:gap-[4.938rem] mq1225:pl-[13.25rem] mq1225:box-border ${className}`}
      style={groupHeaderStyle}
    >
      <div
        className="h-[6.25rem] w-[90rem] relative bg-moccasin hidden max-w-full"
        style={rectangleDivStyle}
      />
      <nav className="m-0 w-[26.875rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[1rem] text-black font-poppins">
          <Link
            href={"/"}
            className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]"
            style={homeStyle}
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="[text-decoration:none] relative font-medium text-[inherit] z-[1]"
            style={shopStyle}
          >
            Shop
          </Link>
          <Link
            href={"/blog"}
            className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]"
            style={aboutStyle}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="[text-decoration:none] h-[1.5rem] relative font-medium text-[inherit] inline-block z-[1]"
            style={contactStyle}
          >
            Contact
          </Link>
        </nav>
      </nav>
      <div className="w-[15.438rem] flex flex-row items-start justify-between gap-[1.25rem]">
        <Link
          href={"/my-account"}>
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/mdiaccountalertoutline.svg"
          />
        </Link>
        <Link
          href={"/shop"}>
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconssearch.svg"
          />
        </Link>
        <Link
          href={"/my-account"}>
          <img
            className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
            loading="lazy"
            alt=""
            src="/akariconsheart.svg"
          />
        </Link>
        <Link
          href={"/cart"}>
        <img
          className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0 min-h-[1.75rem] z-[1]"
          loading="lazy"
          alt=""
          src="/antdesignshoppingcartoutlined.svg"
          />
          </Link>
      </div>
    </header>
  );
};

export default Navbar;
