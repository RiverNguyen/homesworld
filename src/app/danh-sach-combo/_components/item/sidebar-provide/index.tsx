'use client'

import { ChevronLeft } from 'lucide-react'
import { FC, type Dispatch, type ReactNode, type SetStateAction, useEffect } from 'react'

import { ICTrash } from '@/app/lien-he/_components/form'
import { cn } from '@/lib/utils'

interface SidebarProviderProps {
  children: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
  onReset?: () => void
}

const SidebarProvider: FC<SidebarProviderProps> = ({
  children,
  open,
  setOpen,
  className,
  onReset,
}) => {
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        const top = document.body.style.top

        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        document.body.style.overflow = ''

        window.scrollTo(0, Math.abs(parseInt(top || '0', 10)))
      }
    }
  }, [open])

  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 z-[98] bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 z-[99] h-screen w-full max-w-[23.4375rem] bg-white transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
          className,
        )}
      >
        {/* HEADER */}
        <div className='w-full border-b border-[#E5E7EB] p-[1.25rem]'>
          <div className='flex items-center '>
            {/* LEFT */}
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='flex items-center justify-center'
            >
              <ChevronLeft className='size-[1.25rem] text-[#10475F]' />
            </button>
            <div className='flex items-center justify-between w-full'>
              {/* CENTER */}
              <p className='r-16 ml-[0.25rem] font-display text-[#10475F]'>Bộ lọc sản phẩm</p>

              {/* RIGHT */}
              <button
                type='button'
                onClick={onReset}
                className='flex items-center font-display pc-14-14-r text-[#EF2020]'
              >
                Xoá chọn
                <ICTrash className='ml-[0.25rem] size-[1rem]' />
              </button>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className='h-[calc(100vh-4.5rem)] overflow-y-auto'>{children}</div>
      </div>
    </>
  )
}

export default SidebarProvider
