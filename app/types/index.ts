import { UserCircleIcon } from "@heroicons/react/16/solid";

export type IconType = typeof UserCircleIcon




export interface ApiMutateRequestType<RD = any, S = any, E = ErrorType> {
    REQUEST: RD
    RESPONSE: {
        SUCCESS: S,
        ERROR: E
    }
}

export interface ApiGetRequestType<PT extends object = {}, S = any, E = ErrorType> {
    PARAMS?: PT
    RESPONSE: {
        SUCCESS: S,
        ERROR: E
    }
}

export interface ErrorType {

    type: string,
    title: string,
    status: number,
    detail: string,
    instance: string,
    message: string,
    params: string,
    path: string

}


export type pageProps<PT = {}, SP = {}> = {
    params: {
        [Property in keyof PT]: PT[Property];
    },
    searchParams: {
        [Property in keyof SP]: SP[Property];
    }
}