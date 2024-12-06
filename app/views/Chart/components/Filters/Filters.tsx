'use client'
import React from 'react'
import { ButtonFilter } from './components'
import { CommodityType, CurrencyType, PeriodType, WeightType } from '@staticData'
import { FilterType, useChartFilter } from 'views/Chart/hooks'
import { CalendarDateRangeIcon, CircleStackIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Select } from '@components'

export const Filters = () => {

  const { dispatch, period, currency, commodity, weight } = useChartFilter()

  return (
    <div className='grid  grid-cols-2 lg:grid-cols-9 gap-4 text-sm w-full '>

      <div className='col-span-2 lg:col-span-4  xl:col-span-3 flex'>


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

      <div className='col-span-2  lg:col-span-2 flex'>
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

      <div className='col-span-1'>
        <Select
          <CommodityType>
          items={[
            { title: 'Gold', value: 'gold' },
            { title: 'Silver', value: 'silver' },
            { title: 'Platinum', value: 'platinum' },
            { title: 'Palladium', value: 'palladium' },
          ]}
          onSelectAction={(item) => dispatch({ commodity: item })}
          value={commodity}
          icon={CircleStackIcon}
          title='Commodity'
        />
      </div>

      <div className='col-span-1'>
        <Select
          <WeightType>
          items={[
            { title: 'Grams', value: 'grams' },
            { title: 'Ounces', value: 'ounces' },
            { title: 'Kilograms', value: 'kilograms' },
          ]}
          onSelectAction={(item) => dispatch({ weight: item })}
          value={weight}
          icon={CircleStackIcon}
          title='Weight'
        />
      </div>

    </div>
  )
}
