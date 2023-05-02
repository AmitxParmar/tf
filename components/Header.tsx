import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <nav className='container max-w-screen flex w-screen flex-row py-[10px] text-center bg-transparent bg-white justify-between items-center mx-auto absolute inset-x-0 border-b border-b-gray-200 top-0 z-10 '>
            {/* Nav  items left*/}
            <div className='flex items-center'>
                <Link href={"#"} className='h-10 w-10 mr-[1rem] max-w-full inline-block'>
                    <Image src={"https://assets.website-files.com/6005f00b2e999be2caf2bf83/63414f13ebf97b6c790eaa30_Logo.png"} height={40} width={40} alt={"logo"} />
                </Link>
                {/* nav-simple-content */}
                <div className='items-center flex'>
                    <ul className='grid text-text font-semibold grid-cols-6 grid-rows-none'>
                        <li>Program</li>
                        <li>Success Stories</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Events</li>
                    </ul>
                </div>
            </div>
            {/* Nav items right */}
            <div className='flex flex-row text-[.999rem] min-w-[245px]'>
                <button className='bg-white border-2 mr-4 p-1 rounded-full border-orange text-orange hover:bg-orange hover:text-white font-semibold px-4'>
                    Join an Info Session
                </button>
                <button className='bg-orange w-[100px] border-2 rounded-full text-white font-semibold'>
                    Apply
                </button>
            </div>
        </nav>
    )
}

export default Header;