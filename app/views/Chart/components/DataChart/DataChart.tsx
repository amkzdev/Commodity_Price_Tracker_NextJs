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
        case 'palladium': return '#bfbfbf'
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


const generateTickInterval = (period?: PeriodType): Array<number> | undefined => {

    if (period == 'live') {
        //Each 1 Minute Until 10 Minute Ago

        const nowTime = Date.now()

        // return undefined
        return Array.from(new Array(10)).map((i, index) => nowTime - (60 * 1000 * index))
    }

    else if (period == 'today') {
        const nowTime = Date.now()


        // return [1733864513099]

        return Array.from(new Array(9)).map((item, index) => nowTime - (1000 * 60 * (3 * 60) * index))
    }

    return [0.2, 3]

}


const generateDateFormat = (period?: PeriodType) => {

    if (period == 'live' || period == 'today')
        return ({
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%b. %e',
            week: '%b. %e',
            month: '%b. %y',
            year: '%Y'
        })

    else return ({
        second: ' ',
        minute: ' ',
        hour: ' ',
        day: '%e/%o/%Y',
        week: '%b. %e',
        month: '%b. %y',
        year: '%Y'
    })
}


export const DataChart = () => {

    const { data, isLoading } = useChartData()


    const { commodity, period, currency } = useChartFilter()

    const chartMin = data?.data ? data?.data?.map(i=>i.value).sort()?.[0] * 0.997: undefined //Min

    const chartMax = data?.data ? data?.data?.map(i=>i.value).sort().toReversed()?.[0] * 1.003: undefined //Max

    const options = {
        style: {
        },
        chart: {
            type: 'area',
            height: '400px',
            id: '#chart',
            spacingRight: 25,
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
            pointFormat: ` ${commodity?.substring(0, 1).toLocaleUpperCase().concat(commodity.substring(1))} Price  <br/> <b>{point.y}${generateYLabel(currency)}</b> `
            // pointFormat: '{series.name}  <b>{point.y:,.0f}</b><br/>' +
            //     ' {point.x}'
        },
        xAxis: {
            // categories: data?.data.map((i, index, arr) => renderLabel(i.time, period)),
            // tickPositions:[1733862801091],
            // tickPositions: generateTickInterval(period),
            gridLineWidth: 1,
            // tickAmount:3,
            allowTicks: true,
            // breakSize: 2000,
            gridLineColor: 'rgba(0, 0, 0, 0.1)',
            labels: { style: { color: '#333333', fontSize: 10 } },
            // tickInterval: 7,
            crosshair: {
                width: 1,
                color: '#cccccc'
            },
            type: 'datetime', // Set the type to 'datetime'
            dateTimeLabelFormats: generateDateFormat(period),
            tickLength: 0,
            lineColor: 'transparent',
            // plotLines: generateTickInterval(period)?.map(i=>({
            //     color: '#e2e2e2',
            //     width: 0.5,
            //     value: i
            // }))


        },
        yAxis: {
            labels: { align: 'right', title: undefined, format: generateYLabel(currency), style: { fontSize: '10px', color: '#333333' }, distance: 5 },
            opposite: true,
            align: 'right',
            offset: 10,
            gridLineWidth: 1,
            allowOverlap: true,
            formatter: (f: any, t: string) => `${t}$`,
            title: false,
            minorGridLineWidth: 1,
            minorTickInterval: 'auto',
            minorTickColor: 'transparent',
            // minorTickWidth: 1,
            // minorTickLength: 10,
            minorTickPosition: 'outside',
            min:chartMin ,
            max:chartMax

            // label: { format: generateYLabel(currency) }
        },
        series: [{
            name: `${commodity?.substring(0, 1).toLocaleUpperCase().concat(commodity.substring(1))} Price`,
            // data: data?.data.map(i => ({y:i.value  , x:i.time.split('T')[0]}))
            data: data?.data.map(i =>[i.time , i.value]),
            // data: data?.data.map(i =>i.value),
            color: generateChartColor(commodity),
            // pointStart: '2024-12-10',
            // pointInterval: 36e5 // one day

        }]
    }

    // console.log(data?.data.filter((i, index) => index % 1000 == 0).map(i => i.value))

    if (data)
        return (
            <div className='w-full relative [&>.highcharts-credits]:!hidden' style={{ height: '100px' }}>

                <HighchartsReact
                    highcharts={Highcharts}
                    // constructorType={'stockChart'}
                    options={options}
                // containerProps={{}

                />
            </div>
        )
    else if (isLoading)
        return <div className='w-full  flex flex-col gap-2 items-center justify-center h-[400px] bg-gray-50 rounded-lg animate-pulse'><Spinner className='size-5' /></div>
    return <></>
}
