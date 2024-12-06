import { CommodityType, PeriodType } from "@staticData"
import { api } from "_api"
import { useCustomQuery } from "hooks"
import { priceEndpoints, PriceEndpointsType } from "modules/price/endpoints"
import { useChartFilter } from "views/Chart/hooks"


const createFromParam = (period?: PeriodType): string => {

    const date = new Date()

    if (period == 'today') {
        date.setHours(0, 0, 0)
    }
    else if (period == 'month') {
        date.setDate(0)
    }
    else if (period == 'Year') {
        date.setMonth(1, 1)
    }
    else if (period == '3 Month') {
        date.setMonth(date.getMonth() - 3)
    }
    else if (period == '6 Month') {
        date.setMonth(date.getMonth() - 6)
    }
    else if (period == 'live') {
        date.setMinutes(date.getMinutes() - 20)
    }

    else if (period == 'week') {
        date.setDate(date.getDate() - date.getDay())
    }

    return (date).toISOString()
}


export const createMeasurment = (m?: CommodityType): CommodityType => {

    switch (m) {
        case 'gold': return 'gold';
        case 'palladium': return 'palladium';
        case 'platinum': return 'platinum';
        case 'silver': return 'silver';
        default: return 'gold'
    }

}

export const useChartData = () => {

    const { commodity, period } = useChartFilter()

    return useCustomQuery<PriceEndpointsType['GET_PRICES'], [string, CommodityType | undefined, PeriodType | undefined]>({
        queryFn: ({ queryKey }) => {

            return api.get(priceEndpoints.GET_PRICES, { params: { measurement: createMeasurment(queryKey[1]), from: createFromParam(queryKey[2]) , unit:'GRAM' } })
        },
        queryKey: ['GET-PRICES', commodity, period],
        refetchInterval:1000 * 60,
    })

}