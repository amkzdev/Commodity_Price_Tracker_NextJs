import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'
import './globals.css'
import { StickyHeader } from '@components'
import { ClientLayout } from 'ClientLayout'

export const metadata: Metadata = {
  title: 'Gold App',
  description: 'Gold Online Shop'
}

const mainFont = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets:['latin','latin-ext']
})

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${mainFont.className} `}>
        <ClientLayout>
          <StickyHeader />
          <section className='container mx-auto flex py-2 px-4 pb-6 lg:pb-2'>
            {children}
          </section>
        </ClientLayout>
      </body>
    </html>
  )
}
