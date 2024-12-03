'use client'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()


export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
