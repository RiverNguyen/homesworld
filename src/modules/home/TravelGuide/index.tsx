import Link from 'next/link'

import ICRightArrow from '@/components/icons/ICRightArrow'
import BlogItemCompact from '@/components/shared/blog/BlogItemCompact'

const dataFeatured = [
  {
    id: 1,
    slug: 'tigit-works-with-the-best-freelance-guides',
    title: 'Tigit works with the best freelance guides that we can find. Each guide',
    image: '/blog/d-blog-item-compact.webp',
    date: '23/10/2024',
    category: 'Cẩm nang',
  },
  {
    id: 2,
    slug: 'tigit-works-with-the-best-freelance-guides',
    title: 'Tigit works with the best freelance guides that we can find. Each guide',
    image: '/blog/d-blog-item-compact.webp',
    date: '23/10/2024',
    category: 'Cẩm nang',
  },
]

const dataCompact = [
  {
    id: 1,
    slug: 'tigit-works-with-the-best-freelance-guides',
    title: 'Tigit works with the best freelance guides that we can find. Each guide',
    image: '/blog/d-blog-item-compact.webp',
    date: '23/10/2024',
    category: 'Cẩm nang',
  },
  {
    id: 2,
    slug: 'tigit-works-with-the-best-freelance-guides',
    title: 'Tigit works with the best freelance guides that we can find. Each guide',
    image: '/blog/d-blog-item-compact.webp',
    date: '23/10/2024',
    category: 'Cẩm nang',
  },
  {
    id: 3,
    slug: 'tigit-works-with-the-best-freelance-guides',
    title: 'Tigit works with the best freelance guides that we can find. Each guide',
    image: '/blog/d-blog-item-compact.webp',
    date: '23/10/2024',
    category: 'Cẩm nang',
  },
]

export default function TravelGuide() {
  return (
    <section className="pt-30">
      <div className="w-full max-w-350 mx-auto flex flex-col gap-8">

        <div className="flex justify-between items-end h-22.5">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#10475F] font-montserrat text-[2.875rem] font-semibold leading-[130%] tracking-[-0.15625rem]">Cẩm nang du lịch</h2>
            <p className="text-edge-[cap_alphabetic] text-trim-both text-[rgba(16,71,95,0.80)] font-halyard-display text-[1rem] leading-[150%]">Cập nhật những thông tin mới nhất về du lịch cho bạn</p>
          </div>

          <Link href="/travel-guide" className="flex-center gap-2 h-10 px-4 rounded-[6.25rem] bg-[#27AAE1] hover:bg-[#42A3CC] transition-colors duration-300 ease-out">
            <span className="text-white text-[0.875rem] leading-[150%]">Xem tất cả</span>
            <ICRightArrow />
          </Link>
        </div>

        <div className='flex-y-center gap-5'>
          <div className='flex-y-center flex-1 gap-5'>
            {dataFeatured.map((item) => (
              <div key={item.id} className='w-98.5 h-117.75'>
                <BlogItemCompact blog={item} variant="large" />
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-4 w-143.25'>
            {dataCompact?.map((item, index) => (
              <>
                <div className='w-full border-t border-dashed border-[#10475F]/20' />
                <BlogItemCompact key={item.id} blog={item} />
              </>
            ))}
            <div className='w-full border-t border-dashed border-[#10475F]/20' />
          </div>
        </div>

      </div>
    </section>
  )
}