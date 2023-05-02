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
            <div className='min-w-[557px] max-w-[600px] max-h-[100px] h-full inline-block mb-10'>
                <p className='text-[#2A303B] md:text-[2.25rem] font-fr font-semibold tracking-[-0.04em] leading-[4rem] mobile:text-[2.5rem] text-center'>
                    You may wonder... How does a high
                    schoolers do all this?
                </p>
            </div>
            <div className='w-[740px] min-w-[768px] text-lg mb-10 p-4 text-[18px] tracking-[-0.015em] leading-[2rem] flex-col text-[#606970] '>
                <p className='block mb-9 w-full text-center'>
                    It’s because we are not just another Entrepreneurship Bootcamp or Summer Program
                    where teens attend online workshops/classes and work on some ppt presentations.
                </p>
                <p className='block w-full text-center'>
                    We are the only entrepreneurship program where teens learn entrepreneurship  and start
                    working on their ideas by cofounding the startups with startup studios and accelerators.
                </p>
            </div>
            <div className='md:mx-auto xs:grid-cols-2 xs:grid-row-3 xs:relative xs:m-0 md:grid-cols-3 font-fr items-center align-middle text-center justify-evenly xs:gap-[42px] w-[834px] h-[136px] grid'>
                {features.map((feature, index) => (
                    <button key={index} className='outline-black w-[250px] h-[50px] bg-[#ffffff] text-[1.25rem] border border-[#d7d7d7] rounded-[20px] font-normal'>
                        {feature}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Features;