import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      lg: '1025px',
      sm: '640px',
      xlg: {
        max: '1024px',
      },
      xsm: {
        max: '639px',
      },
      tablet: {
        min: '640px',
        max: '1024px',
      },
    },
    extend: {
      fontFamily: {
        'halyard-display': ['Halyard Display', 'sans-serif'],
      },
      colors: {},
      backgroundImage: {},
      boxShadow: {},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.flex-y-center': {
          '@apply flex items-center': {},
        },
        '.flex-x-center': {
          '@apply flex justify-center': {},
        },
        '.absolute-center': {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': {},
        },
        '.absolute-x-center': {
          '@apply absolute left-1/2 -translate-x-1/2': {},
        },
        '.absolute-y-center': {
          '@apply absolute top-1/2 -translate-y-1/2': {},
        },
        '.pc-2x-24-m': {
          '@apply text-[#10475F] text-[1.5rem] font-medium font-halyard-display leading-[1.1]': {},
        },
        '.pc-16-16-r': {
          '@apply text-[#10475F]/80 text-[1rem] font-normal font-halyard-display leading-[1.5]': {},
        },
        '.pc-18-18-m': {
          '@apply text-[#10475F] text-[1.125rem] font-medium font-halyard-display leading-[1.3]':
            {},
        },
      })
    }),
  ],
}
export default config
