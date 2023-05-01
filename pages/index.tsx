import Image from "next/image";
import { Inter } from "next/font/google";
import LandingPage from "@/components/LandingPage";
import Achievements from "@/components/Achievement";
import Features from "@/components/Features";
import SneakPeek from "@/components/SneakPeek";
import Head from "next/head";
import Interest from "@/components/Interest";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <div className="scale-100  m-auto text-white h-screen snap-y snap-mandatory overflow-scroll z-0  scrollbar-track-gray-400/20 object-fit scrollbar-thumb-coffee/80 overflow-x-hidden scrollbar-thin">
        <section className="bg-[#F4F8FA]">
          <LandingPage />
        </section>
        <section className="bg-[#FFFFFF]">
          <Achievements />
        </section>
        <section className="bg-[#FEF3EA]">
          <Features />
        </section>
        <section className="bg-[#FFFFFF]">
          <SneakPeek />
        </section>
        <section className="bg-[rgba(254,247,248,0.6)]">
          <Interest />
        </section>
        <section className="bg-[#E8F5F4]">

        </section>

      </div>
    </ >
  );
}
