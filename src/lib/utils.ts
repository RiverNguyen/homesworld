import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertRemToPx(rem: number) {
  if (typeof window === 'undefined' || !document?.documentElement) {
    return
  }

  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
  return rem * rootFontSize
}

export function formatDateDMY(dateStr: string) {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

export function formatPrice(price: string) {
  const numericPrice = Number(price.replace(/[^\d]/g, ''))

  if (Number.isNaN(numericPrice)) {
    return `${price}đ`
  }

  return `${numericPrice.toLocaleString('vi-VN')}đ`
}
