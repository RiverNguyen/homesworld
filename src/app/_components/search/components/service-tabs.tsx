import Image from 'next/image'

import { ICONS } from '@/app/_components/search/components/search-constants'
import { ITaxonomies } from '@/interfaces/taxonomies.interface'

type ServiceTabsProps = {
  taxonomies: ITaxonomies[]
  activeId: string | null
  onChange: (id: string | null) => void
}

const ServiceTabs = ({ taxonomies, activeId, onChange }: ServiceTabsProps) => {
  const serviceCombo = taxonomies?.map((item, index) => ({
    ...item,
    icon: ICONS[index]?.src ?? ICONS[0].src,
    iconHover: ICONS[index]?.hoverSrc ?? ICONS[0].hoverSrc,
  }))

  return (
    <div className='flex space-x-2 xsm:overflow-x-auto xsm:px-3 hidden_scroll xsm:space-x-[0.375rem]'>
      {serviceCombo?.map((item) => {
        const isActive = activeId === item.id

        return (
          <button
            key={item.id}
            onClick={() => onChange(isActive ? null : item.id)}
            className={`group h-[2.875rem] xms:h-[2.625rem] xsm:px-[0.875rem] xsm:space-x-[0.375rem] px-4 space-x-2 flex-center cursor-pointer rounded-[6.25rem] xsm:shrink-0 backdrop-blur-[5px] transition-colors ${isActive ? 'bg-[#27AAE1] text-white' : 'bg-white text-[#10475F]'}`}
          >
            <Image
              src={isActive ? item.iconHover : item.icon}
              alt={item.name}
              width={30}
              height={30}
              className='size-[1.875rem] object-cover'
            />
            <span className='pc-16-r text-trim-trim-both text-edge-[cap_alphabetic]'>
              {item.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ServiceTabs
