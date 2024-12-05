import { ApiGetRequestType } from "@types"
import { PriceItemData } from "./schema.type"

export const priceEndpoints = {
    GET_PRICES: `/api/price`,


}


export interface PriceEndpointsType {
    GET_PRICES: ApiGetRequestType<{}, PriceItemData[]>

}
