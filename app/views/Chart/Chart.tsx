'use client'
import { periods } from '@staticData'
import React from 'react'
import { ChartTitle, DataChart, Filters, SideBar } from './components'
import { useChartData } from 'modules/price'

export const Chart = ({ period }: { period: string, currency: string, commodity: string, weight: string }) => {

  return (
    <div className='grid grid-cols-5 gap-6 w-full py-8'>

      <div className='col-span-5'>
        <ChartTitle />
      </div>

      <div className='col-span-5'>
        <Filters />
      </div>

      <div className='col-span-5 lg:col-span-4 mt-4'>
        {/* <DataChart /> */}
      </div>

      <div className='col-span-5 lg:col-span-1'>
        <SideBar />
      </div>


    </div>
  )
}
