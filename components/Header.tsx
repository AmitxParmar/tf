import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { nav_items } from '@/utils/constants';
type Props = {}

const Header = (props: Props) => {

    return (
        <nav className='min-w-screen flex flex-row py-[10px] text-center shadow-md bg-review justify-between items-center mx-auto sticky md:px-12 mobile:px-6 inset-x-0 border-b border-b-gray-200 top-0 z-10 '>
            {/* Nav  items left*/}
            <div className='flex items-center'>
                <Link href={"/"} className='h-10 w-10 md:mr-[1rem] max-w-full inline-block'>
                    <Image src="/teensfounder.png" height={40} width={40} alt={"logo"} className='rounded-full' />
                </Link>
                {/* nav-simple-content */}
                <div className='mobile:hidden items-center md:flex'>
                    <ul className='flex gap-2 rounded-sm object-contain text-text font-semibold'>
                        {nav_items.map(({ title, path }, index) =>
                        (<Link key={index} href={path}>
                            <li className='hover:bg-[#f4f8fa] px-4 py-1 rounded-lg'>{title}</li>
                        </Link>)
                        )}

                    </ul>
                </div>
            </div>
            {/* Nav items right */}
            <div className='flex flex-nowrap flex-row text-[.999rem] min-w-[245px]'>
                <button className='bg-white border-2 mr-4 p-1 rounded-full border-orange text-orange flex-auto hover:bg-orange hover:text-white font-semibold px-4'>
                    Join an Info Session
                </button>
                <button className='bg-orange hover:text-orange hover:border-orange hover:bg-white mobile:max-w-fit whitespace-nowrap min-w-[100px] flex-auto border-2 rounded-full text-white font-semibold'>
                    Apply
                </button>
            </div>
        </nav>
    )
}

export default Header;