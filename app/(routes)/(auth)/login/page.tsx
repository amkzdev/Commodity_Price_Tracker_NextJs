import { Login } from '@views'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Log in to your account'
}

export default function page () {
  return <Login />
}
