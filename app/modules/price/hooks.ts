import { api } from "_api"
import { useCustomQuery } from "hooks"
import { priceEndpoints, PriceEndpointsType } from "modules/price/endpoints"

export const useChartData = (period: string, commodity: string) => {

    return useCustomQuery<PriceEndpointsType['GET_PRICES']>({
        queryFn: ({ queryKey }) => api.get(priceEndpoints.GET_PRICES, { params: { measurement: '', from: '' } }),
        queryKey: ['GET-PRICES', commodity, period]
    })

}