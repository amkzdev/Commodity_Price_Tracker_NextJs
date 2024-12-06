import { CommodityType, CurrencyType, PeriodType, WeightType } from '@staticData'
import { create } from 'zustand'

export interface FilterType {
    period?: PeriodType,
    currency?: CurrencyType,
    commodity?:CommodityType,
    weight?:WeightType

}

interface StoreType extends FilterType {

    dispatch:(data:Partial<FilterType>)=>void
}

export const useChartFilter = create<StoreType>((set) => ({
    dispatch: (newData) => set((state) => ({ ...state , ...newData })),
}))

