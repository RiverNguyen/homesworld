'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import List from '@/app/_components/combo/components/list'
import { cn } from '@/lib/utils'

const comboTabs = ['Combo du lịch', 'Khách sạn'] as const

const Combo = () => {
  const [activeTab, setActiveTab] = useState<(typeof comboTabs)[number]>('Combo du lịch')
  const [isComboListAtEnd, setIsComboListAtEnd] = useState(false)

  return (
    <section className='max-w-[93rem] relative mx-auto flex items-center rounded-[1.125rem] bg-white'>
      <div className='p-[1.5rem]'>
        <div className='w-[39.5625rem] h-[39.5625rem] bg-[#F8F8F8]'></div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between items-center max-w-[47.8125rem] mb-[1.875rem]'>
          <div className='space-y-3'>
            <h2 className='text-[#10475F] font-montserrat text-[2.25rem] font-semibold leading-[1.3] tracking-[-0.125rem]'>
              Combo du lịch bán chạy
            </h2>
            <p className='pc-16-16-r text-[#10475F]/80 text-edge-[cap_alphabetic] text-trim-trim-both'>
              Danh sách địa điểm được chúng tôi tổng hợp cho là tốt nhất
            </p>
          </div>
          <div className='h-[3rem] flex-center p-1 rounded-[6.25rem] bg-[#E6E6E6]/60'>
            {comboTabs.map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  type='button'
                  onClick={() => setActiveTab(tab)}
                  className={`relative h-[2.5rem] px-4 rounded-[6.25rem] pc-14-14-r-button cursor-pointer text-trim-trim-both text-edge-[cap_alphabetic] transition-colors ${isActive ? 'text-white' : 'text-[#10475F]'}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId='combo-active-pill'
                      className='absolute inset-0 rounded-[6.25rem] bg-[#27AAE1]'
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className='relative z-[1]'>{tab}</span>
                </button>
              )
            })}
          </div>
        </div>
        <List onHorizontalScrollEndChange={setIsComboListAtEnd} />
      </div>
      <div
        className={cn(
          'z-[10] pointer-events-none h-full w-[8.25rem] absolute right-0 top-0 transition-opacity duration-300',
          isComboListAtEnd && 'opacity-0',
        )}
        style={{
          background:
            'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.80) 15.01%, rgba(255, 255, 255, 0.31) 35.54%, rgba(255, 255, 255, 0.00) 69.61%)',
        }}
        aria-hidden={isComboListAtEnd}
      />
    </section>
  )
}

export default Combo
