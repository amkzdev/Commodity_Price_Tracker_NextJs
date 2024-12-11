import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='text-sm flex flex-row gap-4 items-center '>
         <Link href={'/price/gold/today'} className='text-white hover:text-yellow-400 transition-all duration-200' title='Go To  Chart'>Prices Charts</Link>
        {/*<Link href={'/price/gold#calc'} className='text-white hover:text-yellow-400 transition-all duration-200' title='Go To Calculator'>Calculator</Link> */}
    </nav>
  )
}
