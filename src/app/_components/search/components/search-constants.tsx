import { type ReactNode } from 'react'

import ICCalendar from '@/components/icons/ICCalendar'
import ICCountNumber from '@/components/icons/ICCountNumber'
import ICLocation from '@/components/icons/ICLocation'

export const ICONS = [
  { src: '/home/icon/icon-1.svg', hoverSrc: '/home/icon/icon-1-hover.svg' },
  { src: '/home/icon/icon-2.svg', hoverSrc: '/home/icon/icon-2-hover.svg' },
  { src: '/home/icon/icon-3.svg', hoverSrc: '/home/icon/icon-3-hover.svg' },
  { src: '/home/icon/icon-4.svg', hoverSrc: '/home/icon/icon-4-hover.svg' },
]

export type MobileRowKey = 'date' | 'location' | 'number'

export const MOBILE_ROWS: { key: MobileRowKey; icon: ReactNode; label: string }[] = [
  { key: 'date', icon: <ICCalendar className='size-4' />, label: 'Ngày nhận phòng và trả phòng' },
  { key: 'location', icon: <ICLocation className='size-4' />, label: 'Chọn điểm đến' },
  { key: 'number', icon: <ICCountNumber className='size-4' />, label: 'Chọn số người, phòng' },
]
