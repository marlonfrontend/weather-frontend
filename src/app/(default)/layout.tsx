import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { DefaultLayout } from '@/layouts'
import { Inter } from 'next/font/google'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

export default RootLayout
