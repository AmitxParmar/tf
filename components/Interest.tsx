import React from 'react'

type Props = {}

const Interest = (props: Props) => {
    return (
        <div className='h-full flex flex-col mobile:gap-5 text-black text-center w-full my-[85px] mx-auto'>
            <h3 className="w-fit md:mb-12 mx-auto font-fr font-semibold text-4xl align-center text-texthighlight">
                Areas of interest
            </h3>
            <p className='capitalize m-auto max-w-[734px] relative text-text'>
                Think software, edtech, web3, creator economy, social media, HRtech, Artificial
                Intelligence, etc whatever the idea you might be having, we want to be the early believers
                of today’s ambitious teens
            </p>
        </div>
    )
}

export default Interest;