import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { StickyHeader } from '@components'

export const metadata: Metadata = {
  title: 'Gold App',
  description: 'Gold Online Shop'
}

const mainFont = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900']
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
        <section className='container mx-auto flex py-2 px-4'>{children}</section>
      </body>
    </html>
  )
}
