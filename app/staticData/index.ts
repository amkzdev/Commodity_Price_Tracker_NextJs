//Commodity

export type CommodityType = 'gold' |'silver' | 'platinum' | 'palladium'
export const commodities : Array<CommodityType> = ['gold' ,'silver' , 'platinum' , 'palladium']

//Periods 
export type PeriodType = 'live' | 'today' | 'week' | 'month' | '3 Month' | '6 Month' | 'Year' 
export const periods =['live' , 'today' , 'week' , 'month' , '3 Month' , '6 Month' , 'Year' ]


///Currency Type
export type CurrencyType = 'British Pounds' | 'US Dollar' | 'Euro'
export const currencies  = ['British Pounds' , 'US Dollar' , 'Euro']


///Weight Type
export type WeightType = 'grams' | 'ounces' | 'kilograms'
export const weights = ['grams' , 'ounces' , 'kilograms']


///Commodity Symbols 
export const commoditySymbols :Array<{commodity:CommodityType , symbol:string}> = [
    {commodity :'gold' , symbol:'Au'},
    {commodity :'palladium' , symbol:'Pd'},
    {commodity :'platinum' , symbol:'Pt'},
    {commodity :'silver' , symbol:'Ag'},
] 