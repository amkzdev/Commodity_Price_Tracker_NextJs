import { AxiosError, AxiosResponse } from "axios"
import { QueryKey, UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions, useInfiniteQuery, useMutation, useQuery } from "react-query"
import { ApiGetRequestType, ApiMutateRequestType } from "@types"

export const useCustomMutation = <T extends ApiMutateRequestType, CT = unknown>(data: UseMutationOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>) => useMutation<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>(data)

export const useCustomQuery = <T extends ApiGetRequestType, CT extends QueryKey = string[]>(data: UseQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, AxiosResponse<T['RESPONSE']['SUCCESS']>, CT>) => useQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, AxiosResponse<T['RESPONSE']['SUCCESS']>, CT>(data)

export const useCustomInfiniteQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseInfiniteQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useInfiniteQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)
