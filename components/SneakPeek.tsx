import React from 'react'

type Props = {}

const SneakPeek = (props: Props) => {
    return (
        <div className='w-screen items-center justify-center my-[100px] h-full mx-auto grid grid-rows-2'>
            <div className='mx-auto mb-12 text-center'>
                <h3 className='font-semibold w-fit text-[32px] font-fr text-sneakpeek'>
                    A sneak peek into the fellowship..
                </h3>
            </div>
            <div className='gap-6 text-left w-full grid grid-cols-2 grid-rows-2 '>
                <div className='block'>
                    <span className="font-fr text-black text-2xl mb-6">01</span>
                    <p className='text-text text-base w-[450px] h-fit flex-wrap '>
                        Team up with equally ambitious peers ready to share the
                        founder journey with you.
                    </p>
                </div>
                <div className='block'>
                    <span className="font-fr text-black text-2xl mb-6">01</span>
                    <p className='text-text text-base w-[450px] h-fit flex-wrap '>
                        Team up with equally ambitious peers ready to share the
                        founder journey with you.
                    </p>
                </div>
                <div className='block'>
                    <span className="font-fr text-black text-2xl mb-6">01</span>
                    <p className='text-text text-base w-[450px] h-fit flex-wrap '>
                        Team up with equally ambitious peers ready to share the
                        founder journey with you.
                    </p>
                </div>
                <div className='block'>
                    <span className="font-fr text-black text-2xl mb-6">01</span>
                    <p className='text-text text-base w-[450px] h-fit flex-wrap '>
                        Team up with equally ambitious peers ready to share the
                        founder journey with you.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SneakPeek;