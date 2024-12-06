'use client'
import React from 'react'
import { ButtonFilter } from './components'
import { CurrencyType, PeriodType } from '@staticData'
import { FilterType, useChartFilter } from 'views/Chart/hooks'
import { CalendarDateRangeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const Filters = () => {

  const { dispatch, period , currency } = useChartFilter()

  return (
    <div className='grid grid-cols-4 gap-4 text-sm'>

      <div className='col-span-1'>


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
          onChange={(item) => dispatch({ period: item })}
          value={period}
        />
      </div>

      <div className='col-span-1'>
        <ButtonFilter
          <CurrencyType>
          icon={CurrencyDollarIcon}
          title='Currency'
          items={[
            { title: 'British Pounds', value: 'British Pounds' },
            { title: 'US Dollar', value: 'US Dollar' },
            { title: 'Euro', value: 'Euro' },

          ]}
          onChange={(item) => dispatch({ currency: item })}
          value={currency}
        />
      </div>

    </div>
  )
}
