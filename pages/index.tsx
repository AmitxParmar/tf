import { Inter } from "next/font/google";
import LandingPage from "@/components/LandingPage";
import Achievements from "@/components/Achievement";
import Features from "@/components/Features";
import SneakPeek from "@/components/SneakPeek";
import Interest from "@/components/Interest";
import Review from "@/components/Review";
import Suggestion from "@/components/Suggestion";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className={`grid grid-flow-row space-y-12 ${inter.className}`}>
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
      <section className="bg-[#FFFFFF]">
        <Suggestion />
      </section>
      <section className="bg-[#E8F5F4]">
        <Review />
      </section>
    </div>

  );
}
