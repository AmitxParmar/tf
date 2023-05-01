import React from 'react'

type Props = {}

const Achievements = (props: Props) => {


    return (
        <div className='md:m-auto md:py-[104px] md:max-w-[700px] w-full text-center flex flex-col mobile:my-[100px] justify-center items-center'>

            {/* Headline */}
            <div className="font-bold leading-[39px] w-full font-fr break-words text-center h-full text-black mobile:text-[30px] xs:text-2xl mobile:px-7 mobile:mb-[52px] md:mb-[52px]">
                What’s more, we’re just getting started. Are you?
            </div>

            {/* About */}
            <div className='mb-[52px] max-w-[686px] border border-[#D7D7D7]'>
                <p className='text-text p-6 leading-5 w-full'>In the past two months
                    <span className='text-texthighlight font-medium'>
                        {" "}24 teenagers{" "}
                    </span>have cofounded
                    <span className='text-texthighlight font-medium'>
                        {" "} 10 startups{" "}
                    </span>,
                    with a collective portfolio value of
                    <span className='text-texthighlight font-medium'>
                        {" "}$10 million{" "}
                    </span>
                    as a part of Teenpreneur Fellowship
                </p>
            </div>

            {/* Achievement */}
            <div className='grid lg:grid-cols-3 gap-5 lg:grid-rows-none xs:grid-rows-3 xs:grid-cols-none'>
                <div className=''>
                    <span className='font-fr font-bold leading-[118px] text-[96px] text-orange'>24</span>
                    <p className='text-text break-words'>
                        teenagers aged
                        between 13-19
                    </p>
                </div>
                <div className=''>
                    <span className='font-fr font-bold leading-[118px] text-[96px] text-orange'>10</span>
                    <p className='text-text'>startups</p>
                </div>
                <div className=''>
                    <span className='font-fr font-bold leading-[118px] text-[96px] text-orange'>$5M</span>
                    <p className='text-text'>collective portfolio value</p>
                </div>
            </div>
        </div>
    )
}

export default Achievements