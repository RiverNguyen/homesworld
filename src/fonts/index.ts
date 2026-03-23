import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

/** Montserrat — Google Fonts */
export const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

/**
 * Halyard Display — local OTF
 * Bỏ `fonnts.com-Halyard_Display.otf` vì trùng slot 400 với `..._Regular.otf` (cùng family).
 */
export const halyardDisplay = localFont({
  display: 'swap',
  variable: '--font-halyard-display',
  src: [
    { path: './fonnts.com-Halyard_Display_ExtraLight.otf', weight: '200', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_ExtraLight_Italic.otf', weight: '200', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Light.otf', weight: '300', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Light_Italic.otf', weight: '300', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Book.otf', weight: '350', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Book_Italic.otf', weight: '350', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Regular.otf', weight: '400', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Italic.otf', weight: '400', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Medium.otf', weight: '500', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Medium_Italic.otf', weight: '500', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_SemiBold.otf', weight: '600', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_SemiBold_Italic.otf', weight: '600', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Bold.otf', weight: '700', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Bold_Italic.otf', weight: '700', style: 'italic' },
    { path: './fonnts.com-Halyard_Display_Black.otf', weight: '900', style: 'normal' },
    { path: './fonnts.com-Halyard_Display_Black_Italic.otf', weight: '900', style: 'italic' },
  ],
})
