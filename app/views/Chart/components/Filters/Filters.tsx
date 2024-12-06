'use client'
import React from 'react'
import { ButtonFilter } from './components'
import { PeriodType } from '@staticData'
import { FilterType, useChartFilter } from 'views/Chart/hooks'
import { CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export const Filters = () => {

  const { dispatch , period } = useChartFilter()

  return (
    <div className='grid grid-cols-4 gap-2 text-sm'>

      <ButtonFilter
        <PeriodType>
        icon={CalendarDateRangeIcon}
        title='Period'
        items={[
          { title: 'Live', value: 'live' },
          { title: 'Today', value: 'today' },
          { title: 'Week', value: 'week' },
          { title: 'Month', value: 'month' },
          { title: '3 Month', value: '3 Month' },
          { title: '6 Month', value: '6 Month' },
        ]}
        onChange={(item)=>dispatch({period:item})}
        value={period}
      />

    </div>
  )
}
