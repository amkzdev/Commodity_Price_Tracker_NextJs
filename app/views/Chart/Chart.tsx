'use client'
import { CommodityType, periods, PeriodType } from '@staticData'
import React, { useEffect } from 'react'
import { ChartTitle, DataChart, Filters, SideBar } from './components'
import { useChartData } from 'modules/price'
import { useChartFilter } from './hooks'

export const Chart = ({ period, commodity }: { period?: PeriodType, commodity?: CommodityType }) => {

  const { dispatch } = useChartFilter()

  useEffect(() => {
    dispatch({ period, commodity })
  }, [])

  return (
    <div className='grid grid-cols-5 gap-6 w-full py-8'>

      <div className='col-span-5'>
        <ChartTitle />
      </div>

      <div className='col-span-5 z-10'>
        <Filters />
      </div>

      <div className='col-span-5 lg:col-span-4 mt -0 -my-8 lg:my-0 '>
        <DataChart />
      </div>

      <div className='col-span-5 lg:col-span-1'>
        <SideBar />
      </div>


    </div>
  )
}
