import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="mobile:space-y-4 h-full m-auto grid lg:grid-cols-2 mobile:grid-rows-none mobile:px-12 items-center justify-center min-w-screen lg:px-[110px] ">
      <div className="w-[505px] justify-center h-[250px] lg:mr-12 grid grid-rows-2 mobile:flex mobile:flex-col font-bold">
        <div className="font-bold mobile:h-full font-fr break-words text-left h-fit md:tracking-[-0.02em] md:text-[48px] md:leading-[4rem] w-[505px] text-coffee mobile:text-[30px] ">
          Build a startup while still in{" "}
          <span className="text-orange">high school</span>
        </div>

        <div className="font-normal text-[1.12rem] tracking-[-0.015em] leading-[2rem] break-words text-left text-text">
          The Teenpreneur Fellowship unleashes the ambition of
          teenagers aspiring to become entrepreneurs and propels
          them to start their entrepreneurship journey
        </div>
      </div>
      <div className="bg-black rounded-[20px] block w-[500px] flex-shrink h-[250px] mx-auto mb-12"></div>
    </div>
  );
};

export default LandingPage;
