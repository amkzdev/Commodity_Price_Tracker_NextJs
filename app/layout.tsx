import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'
import { StickyHeader } from '@components'

export const metadata: Metadata = {
  title: 'Gold App',
  description: 'Gold Online Shop'
}

const mainFont = Lato({
  weight: ['100', '300', '400', '700', '900']
})

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${mainFont.className} `}>
        <StickyHeader />
        <section className='container mx-auto flex py-2 px-4'>
          {children}
        </section>
      </body>
    </html>
  )
}
