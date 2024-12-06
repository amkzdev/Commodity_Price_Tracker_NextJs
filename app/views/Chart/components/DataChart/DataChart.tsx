'use client'
import React from 'react'
import { useChartData } from 'modules/price'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Spinner } from '@components'
import { useChartFilter } from 'views/Chart/hooks'
import { CommodityType, PeriodType } from '@staticData'


const renderLabel = (date: string, period?: PeriodType) => {
    if (period == 'today' || period == 'live')
        return (new Date(date)).toLocaleTimeString()
    else return (new Date(date)).toDateString()
}


const generateChartColor = (commodity?:CommodityType) =>{

    switch(commodity)
    {
        case 'gold' :return '#eaddc6'
        case 'palladium':return '#f7f7f7'
        case 'silver' :return '#aaaaaa'
        case 'platinum' :return '#888888'
        default :return  '#eaddc6'
    }
}


export const DataChart = () => {

    const { data, isLoading } = useChartData()


    const { commodity, period } = useChartFilter()

    const options = {
        style: {
            height: '100%',
        },
        chart: {
            type: 'area'
        },
        title: undefined,
        legend: {
            enabled: true
        },
        // plotOptions: {
        //     area: {
        //       pointStart: 20000,
        //       marker: {
        //         enabled: false,
        //         symbol: 'circle',
        //         radius: 2,
        //         states: {
        //           hover: {
        //             enabled: true
        //           }
        //         }
        //       }
        //     }
        //   },
        xAxis: {
            categories: data?.data.filter((i, index) => index % 2000 == 0).map((i) => renderLabel(i.time, period)),
            gridLineWidth: 1

        },
        yAxis: {
            labels: { align: 'right', title: undefined },
            title:false,
            align:'right'
        },
        series: [{
            name: commodity,
            // data: data?.data.map(i => ({y:i.value  , x:i.time.split('T')[0]}))
            data: data?.data.filter((i, index) => index % 2000 == 0).map(i => i.value),
            color: generateChartColor(commodity)
        }]
    }

    console.log(data?.data.filter((i, index) => index % 2000 == 0).map(i => i.value))

    if (data)
        return (
            <div className='w-full aspect-video' >

                <HighchartsReact
                    highcharts={Highcharts}
                    // constructorType={'stockChart'}
                    options={options}

                />
            </div>
        )
    else if (isLoading)
        return <div className='w-full h-32 flex flex-col gap-2 items-center justify-center'><Spinner /></div>
    return <></>
}
