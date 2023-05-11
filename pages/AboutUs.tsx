import React from 'react'
import { Inter } from "next/font/google";
import Reality from '@/components/AboutUs/Reality';
import Problem from '@/components/AboutUs/Problem';
type Props = {}
const inter = Inter({ subsets: ["latin"] });

const AboutUs = (props: Props) => {
    return (
        <div className={`m-auto text-white h-screen snap-y snap-mandatory overflow-y-scroll min-w-full z-0  scrollbar-track-gray-400/20 object-fit scrollbar-thumb-coffee/80 overflow-x-hidden scrollbar-thin ${inter.className}`}>
            <section className='bg-[#F4F8FA]'>
                <Problem />
            </section>
            <section className='bg-[#FFFFFF]'>
                <Reality />
            </section>
        </div >
    )
}

export default AboutUs

