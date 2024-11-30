import React from 'react'
import { Form } from './components/Form/Form'

export const Register = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5 items-start'>
        <span className='text-xl font-semibold'>Register</span>
        <span className='text-gray-500'>
          Complete the form below to create an account here{' '}
        </span>
      </div>

      <Form />
    </div>
  )
}
