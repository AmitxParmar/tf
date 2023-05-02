import React from 'react'

type Props = {}

const FAQs = (props: Props) => {
    return (
        <div className='h-full py-[95px] px-[40px] min-w-full relative mx-auto'>
            <div className='mx-auto text-center flex flex-col items-center'>
                <h1 className='text-[2.37rem] text-center text-coffee font-fr mx-auto w-full mb-[1.5rem]'>
                    Frequently Asked Questions
                </h1>

                <p className='text-text text-[1rem] text-center justify-center items-center min-w-[700px] mx-auto flex'>
                    If you can&apos;t find the answer to your question, please contact us at <span>amit@teensfounder.com</span>
                </p>
            </div>
            <div className='w-full max-h-[50px] border border-[#000] rounded-[15px]'>

            </div>

        </div>
    )
}

export default FAQs