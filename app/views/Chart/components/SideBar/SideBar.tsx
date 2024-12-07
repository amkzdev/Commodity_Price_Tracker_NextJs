'use client'
import { commoditySymbols, CommodityType } from '@staticData'
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

    const { commodity } = useChartFilter()

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 aspect-square flex flex-row justify-center items-center font-bold text-3xl' style={{ ...generateStyle(commodity) }}>
                {commoditySymbols.find(i => i.commodity == commodity)?.symbol}
            </div>

        </div>
    )
}
