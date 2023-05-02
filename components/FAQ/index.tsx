import React from 'react'
import FAQ from './FAQ'

type Props = {}

const FAQs = (props: Props) => {
    const questions = [
        {
            question: "Are we going?",
            answer: "Why do you even care????"
        },
    ]
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
            <div className='w-full max-h-[50px] border border-[#000] rounded-[15px] justify-center align-middle mb-[50px] flex'>
                <div className='bg-[#fff] border-[1px_solid_rgba(0,0,0,0)] p-[10px_20px] relative'>

                </div>

            </div>
            <div className='w-full h-full'>
                <h2 className='mx-auto w-full'>Program</h2>
                <FAQ questions={questions} />
            </div>

        </div>
    )
}

export default FAQs