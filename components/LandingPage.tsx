import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="mobile:h-screen xs:max-h-screen h-full m-auto grid lg:grid-cols-2 mobile:grid-rows-none items-center justify-center bg-[#F4F8FA] mobile:p-[1rem] lg:px-[110px] ">
      <div className="max-w-[505px] justify-center min-h-[250px] lg:mr-12 grid grid-rows-2 grid-cols-none object-fit gap-5 mobile:flex mobile:flex-col font-bold flex-[0_0_auto]">
        <div className="font-bold mobile:h-full p-4 font-fr break-words text-left h-fit text-coffee mobile:text-[30px] xs:text-5xl ">
          Build a startup while still in{" "}
          <span className="text-orange">high school</span>
        </div>

        <div className="font-normal p-4 text-sm leading-5 break-words text-left text-text tracking-wide">The Teenpreneur Fellowship unleashes the ambition of
          teenagers aspiring to become entrepreneurs and propels
          them to start their entrepreneurship journey
        </div>
      </div>
      <img src="/landscape.jpg" className="w-full h-[250px] rounded-2xl" />
    </div>
  );
};

export default LandingPage;
