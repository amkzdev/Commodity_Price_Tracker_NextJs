import { Spinner } from '@components'
import React from 'react'

export default function loading() {
  return (
    <div className='h-screen w-full flex flex-row justify-center items-center'><Spinner className='size-10' /></div>
  )
}
