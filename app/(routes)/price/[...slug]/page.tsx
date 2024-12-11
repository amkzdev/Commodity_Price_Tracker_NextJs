import { commodities, commoditySymbols, CommodityType, periods, PeriodType } from '@staticData'
import { pageProps } from '@types'
import { Metadata } from 'next'
import React from 'react'
import { Chart } from 'views/Chart/Chart'


export const metadata: Metadata = {
  title: 'Price Chart | Gold App'
}
export default function page({ params :{slug} }: pageProps<{ slug: [ CommodityType , PeriodType]}>) {

  const commodity:CommodityType = commodities.indexOf(slug[0])!=-1 ? slug[0] : 'gold'

  const period:PeriodType=periods.indexOf(slug[1])!=-1 ?  slug[1] : 'today'

  return (
    <Chart commodity={commodity} period={period}  />
  )
}
