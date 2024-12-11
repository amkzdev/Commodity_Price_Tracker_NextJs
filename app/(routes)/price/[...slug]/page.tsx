import React from 'react'
import { commodities, CommodityType, periods, PeriodType } from '@staticData'
import { pageProps } from '@types'
import { uppercaseFirstLetter } from '@utils'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Chart } from 'views/Chart/Chart'

export async function generateMetadata({ params }: pageProps<Promise<{ slug: [CommodityType, PeriodType] }>,Promise<any>>): Promise<Metadata> {


  const { slug } = await params
  const commodity: CommodityType = commodities.indexOf(slug[0]) != -1 ? slug[0] : 'gold'

  const period: PeriodType = periods.indexOf(slug[1]?.replace('%20','')) != -1 ? slug[1]?.replace('%20',' ') as PeriodType : 'today'

  return ({
    title: clsx(
      (period != 'live' && period != 'today') && 'Last',
      uppercaseFirstLetter(period ?? ''),
      uppercaseFirstLetter(commodity ?? ''),
      'Price Chart | Gold APP'
    )
  })

}


export default async function page({ params }: pageProps<Promise<{ slug: [CommodityType, PeriodType] }>,Promise<any>>) {

  const {slug} = await params 

  const commodity: CommodityType = commodities.indexOf(slug[0]) != -1 ? slug[0] : 'gold'

  const period: PeriodType  = periods.indexOf(slug[1]?.replace('%20',' ')) != -1 ? slug[1]?.replace('%20',' ') as PeriodType : 'today'

  return (
    <Chart commodity={commodity} period={period} />
  )
}
