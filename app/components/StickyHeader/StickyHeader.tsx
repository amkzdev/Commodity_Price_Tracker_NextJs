'use client'
import { UserIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { useAuth } from 'hooks'

export const StickyHeader = () => {

  const { isLoggedIn } = useAuth()
  return (
    <header className='bg-primary w-full  sticky top-0 drop-shadow shadow z-40'>
      <div className='flex flex-row py-3 px-4 lg:px-0 justify-between  container min-h-12 items-center mx-auto'>
        <div className='flex flex-row gap-12 items-center'>
          <span className='text-yellow-500 font-bold text-lg'>Gold App</span>
          <Navbar />
        </div>

        {!isLoggedIn
          ? <Link href={'/login'} className='flex flex-row gap-2 text-white'>
            <UserIcon className='size-5 ' />
            <span>Login / Register</span>
          </Link> 
          :<Link href={'/dashboard'} className='flex flex-row gap-2 text-white'>
          <UserIcon className='size-5 ' />
          <span>Dashboard</span>
        </Link> 
        }
      </div>
    </header>
  )
}
