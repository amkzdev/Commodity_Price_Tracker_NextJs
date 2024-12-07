'use client'
import { Spinner } from '@components'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { commoditySymbols, CommodityType, currencySymbols, periods } from '@staticData'
import { uppercaseFirstLetter } from '@utils'
import clsx from 'clsx'
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

    const { commodity, currency, period } = useChartFilter()


    const { data, isLoading } = useChartData()

    const currentCurrency = currencySymbols.find(i => i.currency == currency)


    const lastPrice = data?.data?.findLast(i => i)

    const firstPrice = data?.data?.[0]

    const changeColorClassName = () => (lastPrice?.value ?? 0) - (firstPrice?.value ?? 0) < 0 ? 'text-error' : 'text-success'

    const changeBgColorClassName = () => (lastPrice?.value ?? 0) - (firstPrice?.value ?? 0) < 0 ? 'bg-error' : 'bg-success'

    const changePercent = ((((lastPrice?.value ?? 0) - (firstPrice?.value ?? 0)) / (firstPrice?.value ?? 0)) * 100).toFixed(2)
    const changePrice = ((lastPrice?.value ?? 0) - (firstPrice?.value ?? 0)).toFixed(2)

    
    const lowestPrice = data?.data ? Math.min(...data?.data.map(i=>i.value)).toFixed(2) : 0
    const highestPrice = data?.data ? Math.max(...data?.data.map(i=>i.value)).toFixed(2) : 0

    console.log({ lastPrice, firstPrice })

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1  flex flex-row justify-center items-center font-bold text-3xl' style={{ ...generateStyle(commodity) }}>
                {commoditySymbols.find(i => i.commodity == commodity)?.symbol}
            </div>

            <div className='flex flex-col gap-2.5  col-span-2 p-3 border border-border-color'>
                <span className='text-gray-500 text-sm'>Current Price</span>
                {isLoading
                    ? <div className='w-full h-8  animate-pulse bg-gray-200 flex flex-row justify-center items-center'><Spinner className='w-4 h-4' /></div>
                    : <span className='text-2xl text-black-1'>{currentCurrency?.symbol}&nbsp;{lastPrice?.value.toLocaleString('en')}</span>}

            </div>

            {data?.data
                ? <div className='col-span-3 flex flex-col gap-2.5 border border-border-color p-3'>
                    <span className='text-gray-500 text-sm'>{uppercaseFirstLetter(period)} Change</span>

                    <div className='flex flex-row gap-2.5 items-center'>
                        <div className={clsx(changeBgColorClassName(), 'rounded-3xl px-2 py-1 text-white text-sm font-bold')}>{changePercent}%</div>
                        <span className={clsx(changeColorClassName(),'font-semibold')}>{currentCurrency?.symbol}&nbsp;{changePrice}</span>
                    </div>



                </div>
                : <div className='h-20 col-span-3 animate-pulse bg-gray-200 flex flex-row justify-center items-center'><Spinner className='w-4 h-4' /></div>
            }

            {data?.data
                ? <div className='col-span-3 flex flex-col gap-2.5 border border-border-color p-3'>

                    <div className='flex flex-row gap-2 items-center'>
                        <ArrowUpIcon className='text-success size-3'/>
                        <span className='text-gray-500 text-sm'>{uppercaseFirstLetter(period)} high</span>
                        <span className={'font-semibold text-black-1'}>{currentCurrency?.symbol}&nbsp;{highestPrice}</span>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                        <ArrowUpIcon className='text-error size-3'/>
                        <span className='text-gray-500 text-sm'>{uppercaseFirstLetter(period)} low</span>
                        <span className={'font-semibold text-black-1'}>{currentCurrency?.symbol}&nbsp;{lowestPrice}</span>
                    </div>



                </div>
                : <div className='h-20 col-span-3 animate-pulse bg-gray-200 flex flex-row justify-center items-center'><Spinner className='w-4 h-4' /></div>
            }
        </div>
    )
}
