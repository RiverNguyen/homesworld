'use client'
import { useEffect, useRef, useState } from 'react'
import tocbot from 'tocbot'

type TocBotTypes = {
  contentRef: string
}
import './style.css'

export default function TocBot({ contentRef }: TocBotTypes) {
  const tocRef = useRef<HTMLDivElement | null>(null)
  const [expand, setExpand] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  const updateTocItems = (isExpand: boolean) => {
    if (!tocRef.current) return
    const items = tocRef.current.querySelectorAll<HTMLElement>('.toc-list-item')
    setHasMore(items.length > 3)
    items.forEach((el, index) => {
      el.style.display = isExpand || index < 3 ? '' : 'none'
    })
  }

  useEffect(() => {
    if (!tocRef.current || !contentRef) return

    const timeout = setTimeout(() => {
      tocbot.init({
        tocElement: tocRef.current ?? undefined,
        // contentElement: contentRef.current ?? undefined,\
        contentSelector: contentRef,
        headingSelector: 'h2, h3',
        scrollSmooth: true,
        scrollSmoothOffset: -80,
      })

      updateTocItems(false)
    }, 0)

    return () => {
      clearTimeout(timeout)
      tocbot.destroy()
    }
  }, [contentRef])

  useEffect(() => {
    updateTocItems(expand)
  }, [expand])

  return (
    <aside className='xsm:my-[1.25rem] xsm:py-[1rem] xsm:px-[0.75rem] xsm:rounded-[1rem] p-[1.5rem] my-[1.5rem] rounded-[1.125rem] w-full h-fit bg-white shadow-[0rem_0.875rem_1.875rem_0rem_rgba(0,0,0,0.02)] transition-all duration-300 text-edge-[cap_alphabetic] [text-box-trim:trim-both]'>
      <span className='xsm:mb-16-m xsm:mb-[0.72917rem] block pc-2x-24-m text-[#10475F]'>
        Tóm tắt nội dung
      </span>
      <div ref={tocRef} />
      {hasMore && (
        <button
          type='button'
          onClick={() => setExpand((prev) => !prev)}
          className='cursor-pointer xsm:mb-14-r pc-16-16-r text-[#27AAE1] xsm:mt-[0.75rem] mt-[1.5rem] hover:underline text-edge-[cap_alphabetic] [text-box-trim:trim-both]'
        >
          {expand ? 'Ẩn bớt' : 'Xem thêm'}
        </button>
      )}
    </aside>
  )
}
