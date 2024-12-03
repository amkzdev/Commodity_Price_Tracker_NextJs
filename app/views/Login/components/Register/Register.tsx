'use client'
import React from 'react'
import { Form } from './components/Form/Form'
import { useSignUp } from '../hooks'
import { Verify } from './components/Verify/Verify'

export const Register = () => {
  const { step } = useSignUp()

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1.5 items-start'>
        <span className='text-xl font-semibold'>Register</span>
        {step==1 && <span className='text-gray-500'>
          Complete the form below to create an account here{' '}
        </span>}
      </div>

      {step == 1 && <Form />}
      {step == 2 && <Verify />}
    </div>
  )
}
