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
        montserrat: ['var(--font-montserrat)'],
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
        '.m-20-20': {
          '@apply text-[1.25rem] font-medium leading-[1.1]': {},
        },
        '.mb-12-r': {
          '@apply text-[0.75rem] font-normal leading-[1.5]': {},
        },
        '.mb-14-r': {
          '@apply text-[0.875rem] font-normal leading-[1.5]': {},
        },
        '.m-14-14': {
          '@apply text-[0.875rem] font-medium leading-[1.5]': {},
        },

        '.mb-18-s': {
          '@apply text-[1.125rem] font-semibold leading-[1.3]': {},
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
          '@apply text-[1.125rem] font-medium leading-[1.3]': {},
        },
        '.pc-18-18-r': {
          '@apply text-[1.125rem] font-normal leading-[1.3]': {},
        },
        '.pc-h1-48-s': {
          '@apply text-[3rem] leading-[1.2] font-semibold tracking-[-0.15625rem]': {},
        },
        '.pc-16-r': {
          '@apply text-[1rem] leading-[1.5]': {},
        },
        '.mb-26-s': {
          '@apply text-[1.625rem] font-semibold leading-[1.2] tracking-[-0.09375rem]': {},
        },

        '.pc-2x-20-m': {
          '@apply text-[1.25rem] font-medium leading-[1.3]': {},
        },
        '.pc-2x-28-m': {
          '@apply text-[1.75rem] font-medium leading-[1.1]': {},
        },
        '.pc-16-16-r-input': {
          '@apply  text-[1rem] font-normal leading-[150%]': {},
        },
        '.pc-14-14-r-button': {
          '@apply  text-[0.875rem] font-normal leading-[150%]': {},
        },
        '.r-14': {
          '@apply text-[0.875rem] font-normal leading-[150%]': {},
        },

        '.r-13-button': {
          '@apply text-[0.8125rem] font-normal leading-[150%]': {},
        },

        '.r-12-12': {
          '@apply text-[0.75rem] font-normal leading-[150%]': {},
        },

        '.m-16': {
          '@apply text-[1rem] font-medium leading-[130%]': {},
        },
        '.m-16-16': {
          '@apply text-[1rem] font-medium leading-[130%]': {},
        },
        '.m-16-16-m': {
          '@apply text-[1rem] font-normal leading-[130%]': {},
        },
        '.s-25-mon': {
          '@apply text-[1.5625rem] font-semibold leading-[120%] tracking-[-0.09375rem]': {},
        },
        '.pc-h3-32-r': {
          '@apply text-[2rem] font-normal leading-[110%]': {},
        },
        '.pc-18-r': {
          '@apply text-[1.125rem] leading-[1.3]': {},
        },
        '.pc-18-18': {
          '@apply text-[1.125rem]  font-medium leading-[1.3]': {},
        },
        '.pc-sub-12-r': {
          '@apply text-[0.75rem] font-normal leading-[130%] ': {},
        },
        '.pc-26-s-mons': {
          '@apply text-[1.625rem] font-semibold  leading-[1.2] tracking-[-0.09375rem] text-left':
            {},
        },
      })
    }),
  ],
}
export default config
