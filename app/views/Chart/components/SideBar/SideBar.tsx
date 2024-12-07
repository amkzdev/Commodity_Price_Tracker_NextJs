'use client'
import { Spinner } from '@components'
import { commoditySymbols, CommodityType, currencySymbols } from '@staticData'
import { useChartData } from 'modules/price'
import React from 'react'
import { useChartFilter } from 'views/Chart/hooks'


const generateStyle = (commodity?: CommodityType): { color: string, background: string } => {

    if (commodity == 'gold')
        return ({ background: '#f3e9d8', color: '#d5b276' })
    else if (commodity == 'silver')
        return ({ background: '#dcdee0', color: '#72787e' })

    else if (commodity == 'palladium')
        return ({ color: '#887474', background: '#d8d1d1' })
    else if (commodity == 'platinum')
        return ({ color: '#746e63', background: '#d0cec8' })

    else return ({ background: '#f3e9d8', color: '' })
}

export const SideBar = () => {

    const { commodity  , currency} = useChartFilter()


    const { data, isLoading } = useChartData()

    const currentCurrency = currencySymbols.find(i=>i.currency==currency)


    const lastPrice = data?.data?.findLast(i=>i)

    console.log({lastPrice})

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1  flex flex-row justify-center items-center font-bold text-3xl' style={{ ...generateStyle(commodity) }}>
                {commoditySymbols.find(i => i.commodity == commodity)?.symbol}
            </div>

            <div className='flex flex-col gap-2  col-span-2 p-3 border border-border-color'>
                <span className='text-gray-500 text-sm'>Current Price</span>
                {isLoading
                    ? <div className='w-full h-8 rounded-lg animate-pulse bg-gray-200 flex flex-row justify-center items-center'><Spinner className='w-4 h-4'/></div>
                    : <span className='text-2xl text-black-1'>{currentCurrency?.symbol}&nbsp;{lastPrice?.value.toLocaleString('en')}</span>}

            </div>

        </div>
    )
}
