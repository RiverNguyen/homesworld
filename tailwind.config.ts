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
        montserrat: ['montserrat', 'sans-serif'],
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
        '.pc-h2-46-s-mons': {
          '@apply  text-[2.875rem] font-semibold font-montserrat leading-[1.3] tracking-[-0.15625rem]':
            {},
        },
        '.mb-25-s-mons': {
          '@apply  text-[1.5625rem] font-semibold font-montserrat leading-[1.1] tracking-[-0.09375rem]':
            {},
        },
        '.mb-16-m': {
          '@apply  text-[1rem] font-medium leading-[1.3]': {},
        },
        '.mb-14-r': {
          '@apply text-[0.875rem] font-normal leading-[1.5]': {},
        },
        '.mb-20-m': {
          '@apply text-[1.25rem] font-medium leading-[1.1]': {},
        },
        '.pc-14-14-r': {
          '@apply text-[0.875rem] font-normal leading-[1.5]': {},
        },
        '.pc-2x-24-m': {
          '@apply  text-[1.5rem] font-medium leading-[1.1]': {},
        },
        '.pc-16-16-r': {
          '@apply text-[1rem] font-normal leading-[1.5]': {},
        },
        '.pc-18-18-m': {
          '@apply  text-[1.125rem] font-medium leading-[1.3]': {},
        },
      })
    }),
  ],
}
export default config
