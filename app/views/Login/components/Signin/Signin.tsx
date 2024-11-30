import React from 'react'
import { Form } from './components/Form/Form'

export const Signin = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1.5 items-start'>
        <span className='text-xl font-semibold'>Sign In</span>
        <span className='text-gray-500'>Log in to your customer account</span>
      </div>

      <Form />
    </div>
  )
}
