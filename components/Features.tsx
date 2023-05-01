import React from 'react'

type Props = {}

const Features = (props: Props) => {

    const features: string[] = [
        "Learning",
        "Resources",
        "Mentorship",
        "Funding",
        "Credits",
        "Product Development",
    ]

    return (
        <div className='text-black h-full relative w-screen flex flex-col bg-featuredbg md:px-[223px] md:py-[92px] items-center justify-center mt-auto mx-auto'>
            <div className='max-w-[557px] w-full max-h-[100px] h-full inline-block mb-10'>
                <p className='text-[#2A303B] font-fr font-semibold leading-[44px] md:text-4xl mobile:text-[2.5rem] text-center'>
                    You may wonder... How does a high
                    schooler do all this?
                </p>
            </div>
            <div className='max-w-[734px] text-lg mb-10 p-4 w-full flex-col text-[#606970] '>
                <p className='block mb-5 text-center'>
                    It’s because we are not just another Entrepreneurship Bootcamp or Summer Program
                    where teens attend online workshops/classes and work on some ppt presentations.
                </p>
                <p className='block text-center'>
                    We are the only entrepreneurship program where teens learn entrepreneurship  and start
                    working on their ideas by cofounding the startups with startup studios and accelerators.
                </p>
            </div>
            <div className='md:mx-auto xs:grid-cols-2 xs:grid-row-3 xs:relative xs:m-0 md:grid-cols-3 font-fr items-center align-middle text-center justify-evenly xs:gap-6 p-7 w-[834px] grid'>
                {features.map((feature, index) => (
                    <button key={index} className='outline-black w-[250px] h-[50px] bg-[#ffffff] border border-[#d7d7d7] rounded-[20px] shrink-0 font-normal'>
                        {feature}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Features;