'use client'
import React from 'react'
import { useChartData } from 'modules/price'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Spinner } from '@components'
import { useChartFilter } from 'views/Chart/hooks'
import { CommodityType, CurrencyType, PeriodType } from '@staticData'
import moment from 'moment'


const renderLabel = (date: string, period?: PeriodType) => {
    if (period == 'today' || period == 'live')
        return moment(date).format('HH:mm')
    else return moment(date).format('DD/MM/YYYY')
}


const generateChartColor = (commodity?: CommodityType) => {

    switch (commodity) {
        case 'gold': return '#eaddc6'
        case 'palladium': return '#f7f7f7'
        case 'silver': return '#aaaaaa'
        case 'platinum': return '#bfbfbf'
        default: return '#eaddc6'
    }
}

const generateYLabel = (currency?: CurrencyType) => {
    if (currency == 'US Dollar')
        return '${text}'
    else if (currency == 'British Pounds')
        return '£{text}'
    else if (currency == 'Euro')
        return '€{text}'
    return '${text}'
}


export const DataChart = () => {

    const { data, isLoading } = useChartData()


    const { commodity, period, currency } = useChartFilter()

    const options = {
        style: {
            height: '40vh',
        },
        chart: {
            type: 'area'
        },
        title: undefined,
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                fillOpacity: 0.5
            }
            // area: {
            //   pointStart: 20000,
            //   marker: {
            //     enabled: false,
            //     symbol: 'circle',
            //     radius: 2,
            //     states: {
            //       hover: {
            //         enabled: true
            //       }
            //     }
            //   }
            // }
        },

        tooltip: {
            crosshairs:true,
            pointFormat:` ${commodity?.substring(0, 1).toLocaleUpperCase().concat(commodity.substring(1))} Price  <br/> <b>{point.y}${generateYLabel(currency)}</b> `
            // pointFormat: '{series.name}  <b>{point.y:,.0f}</b><br/>' +
            //     ' {point.x}'
        },
        xAxis: {
            categories: data?.data.filter((i, index) => index % 1000 == 0).map((i, index, arr) => renderLabel(i.time, period)),
            gridLineWidth: 1,
            tickAmount: 8,
            allowTicks: true,
            breakSize: 2000,
            gridLineColor: 'rgba(0, 0, 0, 0.1)',
            tickInterval: 7,
            labels: {
                offset: 10
            },
            crosshair:true

        },
        yAxis: {
            labels: { align: 'right', title: undefined ,format: generateYLabel(currency) },
            opposite: true,
            align: 'right',
            offset: 10,
            gridLineWidth: 1,
            allowOverlap: true,
            formatter: (f: any, t: string) => `${t}$`,
            title: false,
            // crosshair:true
            // label: { format: generateYLabel(currency) }
        },
        series: [{
            name: `${commodity?.substring(0, 1).toLocaleUpperCase().concat(commodity.substring(1))} Price`,
            // data: data?.data.map(i => ({y:i.value  , x:i.time.split('T')[0]}))
            data: data?.data.filter((i, index) => index % 1000 == 0).map(i => i.value),
            color: generateChartColor(commodity),

        }]
    }

    // console.log(data?.data.filter((i, index) => index % 1000 == 0).map(i => i.value))

    if (data)
        return (
            <div className='w-full ' >

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
