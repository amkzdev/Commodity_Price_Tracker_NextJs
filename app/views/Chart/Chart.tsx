import { periods } from '@staticData'
import React from 'react'
import { Filters } from './components'

export const Chart = ({ period }: { period: string, currency: string, commodity: string, weight: string }) => {
  return (
    <div className='flex flex-col gap-2'>

      <Filters/>
      
      
    </div>
  )
}
