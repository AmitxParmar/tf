import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="mobile:h-screen xs:max-h-screen h-full m-auto grid lg:grid-cols-2 mobile:grid-rows-none items-center justify-center bg-[#F4F8FA] mobile:p-[1rem] lg:px-[110px] w-fit ">
      <div className="w-[505px] justify-center h-[250px] lg:mr-12 grid grid-rows-2 grid-cols-none gap-5 mobile:flex mobile:flex-col font-bold flex-[0_0_auto]">
        <div className="font-bold mobile:h-full font-fr break-words text-left h-fit md:tracking-[-0.02em] md:text-[48px] md:leading-[4rem] w-[505px] text-coffee mobile:text-[30px] ">
          Build a startup while still in{" "}
          <span className="text-orange">high school</span>
        </div>

        <div className="font-normal text-[1.12rem] tracking-[-0.015em] leading-[2rem] break-words text-left text-text">The Teenpreneur Fellowship unleashes the ambition of
          teenagers aspiring to become entrepreneurs and propels
          them to start their entrepreneurship journey
        </div>
      </div>
      <div className="bg-black rounded-[20px] block min-w-[500px] min-h-[250px] mx-auto"></div>
      {/* <img src="/landscape.jpg" className="w-[500px] h-[250px] rounded-2xl" /> */}
    </div>
  );
};

export default LandingPage;
