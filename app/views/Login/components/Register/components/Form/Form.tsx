import { Button, Input } from '@components'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const Form = () => {
  return (
    <div className='bg-gray-50 rounded-md border flex flex-col gap-6 p-4 py-6'>
      
      <span className='text-xl'>Account Details</span>

      <Input label='Email Address' placeholder='Enter Email' />

      <Input label='Create Password' placeholder='Create Password' />

      <Input label='Confirm Password' placeholder='Confirm Password' />
      

      <Button rightIcon={ArrowRightIcon} variant='suceess' size='large' className='font-bold'>Continue</Button>


    </div>
  )
}
