import React from 'react'
import { commodities, CommodityType, periods, PeriodType } from '@staticData'
import { pageProps } from '@types'
import { uppercaseFirstLetter } from '@utils'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Chart } from 'views/Chart/Chart'

export async function generateMetadata ({params:{slug}} :pageProps<{ slug: [ CommodityType , PeriodType]}>): Promise<Metadata> {

  const commodity:CommodityType = commodities.indexOf(slug[0])!=-1 ? slug[0] : 'gold'

  const period:PeriodType=periods.indexOf(slug[1])!=-1 ?  slug[1] : 'today'

  return ({ title:clsx(
    (period != 'live' && period != 'today') && 'Last',
    uppercaseFirstLetter(period ?? ''),
    uppercaseFirstLetter(commodity ?? ''),
    'Price Chart | Gold APP' 
  )})

}


export default function page({ params :{slug} }: pageProps<{ slug: [ CommodityType , PeriodType]}>) {

  const commodity:CommodityType = commodities.indexOf(slug[0])!=-1 ? slug[0] : 'gold'

  const period:PeriodType=periods.indexOf(slug[1])!=-1 ?  slug[1] : 'today'

  return (
    <Chart commodity={commodity} period={period}  />
  )
}
