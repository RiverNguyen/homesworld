/* eslint-disable indent */
'use client'

import Image from 'next/image'
import { useState } from 'react'

import { ITaxonomies } from '@/interfaces/taxonomies.interface'

const ICONS = [
  { src: '/home/icon/icon-1.svg', hoverSrc: '/home/icon/icon-1-hover.svg' },
  { src: '/home/icon/icon-2.svg', hoverSrc: '/home/icon/icon-2-hover.svg' },
  { src: '/home/icon/icon-3.svg', hoverSrc: '/home/icon/icon-3-hover.svg' },
  { src: '/home/icon/icon-4.svg', hoverSrc: '/home/icon/icon-4-hover.svg' },
]

const FilterSearch = ({ taxonomies }: { taxonomies: ITaxonomies[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const SERVICE_COMBO = taxonomies?.map((item, index) => ({
    ...item,
    icon: ICONS[index]?.src ?? ICONS[0].src,
    iconHover: ICONS[index]?.hoverSrc ?? ICONS[0].hoverSrc,
  }))

  return (
    <section className='translate-y-[-6.1875rem] relative z-[11] max-w-[87.5rem] mx-auto'>
      <div className="flex space-x-2">
        {SERVICE_COMBO?.map((item) => {
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(isActive ? null : item.id)}
              className={`group h-[2.875rem] px-4 space-x-2 flex-center cursor-pointer rounded-[6.25rem] backdrop-blur-[5px] transition-colors ${isActive ? 'bg-[#27AAE1] text-white' : 'bg-white text-[#10475F]'
                }`}
            >
              <Image
                src={isActive ? item.iconHover : item.icon}
                alt={item.name}
                width={30}
                height={30}
                className='size-[1.875rem] object-cover'
              />
              <span className='pc-16-r  text-trim-trim-both text-edge-[cap_alphabetic]'>{item.name}</span>
            </button>
          )
        })}
      </div>

      <div className="flex bg-white w-full h-[5.625rem] mt-[0.9125rem] rounded-[1.125rem] shadow-[0_315px_88px_0_rgba(168,168,168,0),0_202px_81px_0_rgba(168,168,168,0.01),0_113px_68px_0_rgba(168,168,168,0.05),0_50px_50px_0_rgba(168,168,168,0.09),0_13px_28px_0_rgba(168,168,168,0.10)]">
      </div>
    </section>
  )
}

export default FilterSearch