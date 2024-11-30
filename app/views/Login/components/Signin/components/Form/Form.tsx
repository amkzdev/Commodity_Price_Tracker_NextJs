import React from 'react'

import { Button, Input } from '@components'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const Form = () => {
  return (
    <div className='bg-gray-50 rounded-md border flex flex-col gap-6 p-4 py-6'>

      <Input label='Email Address' placeholder='Enter Email' />

      <Input label=' Password' placeholder='Password' />

      <div className='flex flex-row gap-2  items-center justify-between'>
        <Button
          rightIcon={ArrowRightIcon}
          variant='suceess'
          size='large'
          className='font-bold'
        >
          Login
        </Button>

        <Link href={'/forgot-password'}>Forgotten Password?</Link>
      </div>
    </div>
  )
}
