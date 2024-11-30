import React from 'react'
import { Register } from './components/Register/Register'

export const Login = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full py-4'>
      <div className='col-span-1'>
        <Register />
      </div>

      <div className='col-span-1'>
        Login
      </div>
    </div>
  )
}
