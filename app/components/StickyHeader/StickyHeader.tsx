import { UserIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import { Navbar } from './components/Navbar/Navbar'

export const StickyHeader = () => {
  return (
    <header className='bg-primary w-full  sticky top-0 drop-shadow shadow'>
      <div className='flex flex-row p-2 justify-between px-4 container min-h-12 items-center mx-auto'>
        <div className='flex flex-row gap-12 items-center'>
          <span className='text-yellow-500 font-bold text-lg'>Gold App</span>
          <Navbar />
        </div>

        <Link href={'/login'} className='flex flex-row gap-2 text-white'>
          <UserIcon className='size-5 ' />
          <span>Login / Register</span>
        </Link>
      </div>
    </header>
  )
}
