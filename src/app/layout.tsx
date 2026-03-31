import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import { halyardDisplay, montserrat } from '@/fonts'
import { ApiHeaderResponse } from '@/interfaces/header.interface'
import CTA from '@/layouts/cta'
import Footer from '@/layouts/footer/footer'
import Header from '@/layouts/header/header'
import headerService from '@/services/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Homes World',
  description: 'Homes World',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [headerData]: [ApiHeaderResponse] = await Promise.all([headerService.getHeader()])

  return (
    <html
      lang='vi'
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.variable} ${halyardDisplay.variable} ${halyardDisplay.className} antialiased mt-[4.87rem] xsm:mt-[3.13rem]`}
      >
        <Header data={headerData?.header} />
        <NuqsAdapter>{children}</NuqsAdapter>
        <NextTopLoader
          color='linear-gradient(0deg, #8CC63F 0%, #27AAE1 100%)'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing='ease'
          speed={200}
          shadow='0 0 10px #8CC63F,0 0 5px #27AAE1'
          template='<div class="bar" role="bar"><div class="peg"></div></div>
    <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Toaster richColors />
        <Footer />
        <CTA data={[]} />
        <div
          id='google_translate_element'
          style={{ height: 0, overflow: 'hidden' }}
        />
      </body>
    </html>
  )
}
