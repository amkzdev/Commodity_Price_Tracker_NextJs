import { Metadata } from 'next'
import React from 'react'
import { Chart } from 'views/Chart/Chart'


export const metadata:Metadata ={
    title:'price charts | Gold App'
}
export default function page() {
  return (
    <Chart/>
  )
}
