import type { NextPage } from "next";

export type GroupComponent11Type = {
  className?: string;
};

const GroupComponent11: NextPage<GroupComponent11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[46.5rem] bg-white flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.062rem] box-border gap-[2.937rem] max-w-full text-left text-[1.5rem] text-darkgray font-poppins mq750:h-auto mq750:gap-[1.438rem] mq1050:pb-[2.625rem] mq1050:box-border mq450:pb-[1.688rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[46.5rem] relative bg-white hidden" />
      <div className="self-stretch h-[0.063rem] relative box-border shrink-0 border-t-[1px] border-solid border-gainsboro-200" />
      <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.125rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full shrink-0">
        <div className="w-[77.438rem] flex flex-col items-end justify-start gap-[2.281rem] max-w-full mq750:gap-[1.125rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem] box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[3.312rem] max-w-full mq750:flex-wrap mq750:gap-[1.625rem]">
              <h3 className="m-0 h-[2.25rem] relative text-inherit font-normal font-inherit text-black inline-block z-[1] mq450:text-[1.188rem]">
                Description
              </h3>
              <h3 className="m-0 h-[2.25rem] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-[1.188rem]">
                Additional Information
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.188rem]">
                Reviews [5]
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-justify text-[1rem]">
            <div className="w-[64.125rem] flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
              <p className="m-0 self-stretch relative z-[1]">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="m-0 self-stretch relative z-[1]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.812rem] max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[24.563rem] min-h-[21.75rem] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/group-107@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[24.563rem] min-h-[21.75rem] z-[1] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/group-106@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative box-border shrink-0 border-t-[1px] border-solid border-gainsboro-200" />
    </section>
  );
};

export default GroupComponent11;
