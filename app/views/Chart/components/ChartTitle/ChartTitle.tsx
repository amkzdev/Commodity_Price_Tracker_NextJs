import { uppercaseFirstLetter } from '@utils'
import React from 'react'
import { useChartFilter } from 'views/Chart/hooks'

export const ChartTitle = () => {

    const { period, commodity } = useChartFilter()

    return (
        <h1 className='text-3xl'> 
            {(period != 'live' && period != 'today') && 'Last'}&nbsp;
            {uppercaseFirstLetter(period ?? '')}&nbsp;
            {uppercaseFirstLetter(commodity ?? '')} 
            &nbsp;Price
        </h1>
    )
}
