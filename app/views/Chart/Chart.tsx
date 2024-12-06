'use client'
import { periods } from '@staticData'
import React from 'react'
import { DataChart, Filters } from './components'
import { useChartData } from 'modules/price'

export const Chart = ({ period }: { period: string, currency: string, commodity: string, weight: string }) => {

  return (
    <div className='grid grid-cols-5 gap-4 w-full'>

      <div className='col-span-5'>
        <Filters />
      </div>

      <div className='col-span-5 lg:col-span-4 mt-20'>
        <DataChart />
      </div>

      <div className='col-span-5 lg:col-span-1'>

      </div>


    </div>
  )
}
