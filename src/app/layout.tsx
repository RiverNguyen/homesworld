import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import { halyardDisplay, montserrat } from '@/fonts'
import './globals.css'
import Footer from '@/layouts/footer/footer'
import Header from '@/layouts/header/header'
import { IMedia } from '@/interfaces/media.interface'
import CTA from '@/layouts/cta'
export const metadata: Metadata = {
  title: 'Homes World',
  description: 'Homes World',
}
const ctaMockData: { icon: IMedia; link: string }[] = [
  {
    icon: {
      id: 1,
      url: '/lien-he/d-zalo.svg',
      alt: 'Zalo',
    } as IMedia,
    link: 'https://zalo.me/0123456789',
  },
  {
    icon: {
      id: 2,
      url: '/lien-he/d-phone.svg',
      alt: 'Phone',
    } as IMedia,
    link: 'tel:0123456789',
  },
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='vi'
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.variable} ${halyardDisplay.variable} ${halyardDisplay.className} antialiased mt-[4.87rem] xsm:mt-[3.13rem]`}
      >
       <Header /> 
        <NuqsAdapter>{children}</NuqsAdapter>
        <CTA data={ctaMockData ?? []} />
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
      </body>
    </html>
  )
}
