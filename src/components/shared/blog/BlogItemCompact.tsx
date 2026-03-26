import { decode } from 'html-entities'
import Image from 'next/image'
import Link from 'next/link'

import ICArrow from '@/components/icons/ICArrow'
import ICLineDashedWhite from '@/components/icons/ICLineDashedWhite'
import { PostItem } from '@/interfaces/blog.interface'
import { formatDateDMY } from '@/lib/utils'

type Variant = 'compact' | 'large'

export default function BlogItemCompact({
  blog,
  variant = 'compact',
}: {
  blog: PostItem
  variant?: Variant
}) {
  if (variant === 'large') {
    return (
      <article className='w-full h-full group'>
        <Link
          href={`/blog/${blog.slug}`}
          className='relative flex w-full h-full rounded-[1.125rem] overflow-hidden xsm:rounded-[1rem]'
        >
          <Image
            src={blog.thumbnail.url}
            alt={decode(blog.title)}
            fill
            className='object-cover lg:group-hover:scale-105 transition-transform duration-350'
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.42)_3.46%,rgba(13,13,13,0.14)_20.54%,rgba(13,13,13,0.14)_44.48%,rgba(13,13,13,0.70)_71.51%)] pointer-events-none' />
          <div className='absolute top-4 right-4 flex-center h-7.25 px-3 rounded-[6rem] bg-[#8CC63F] text-white text-[0.875rem] leading-[150%] xsm:h-6.5 xsm:text-[0.75rem]'>
            {blog.taxonomies.category[0].name}
          </div>
          <div className='absolute left-0 bottom-0 w-full p-4 flex flex-col gap-3'>
            <h3 className='text-white text-[1.25rem] font-medium leading-[130%] line-clamp-2 xsm:text-[1.125rem]'>
              {decode(blog.title)}
            </h3>
            <ICLineDashedWhite className='w-full' />
            <div className='flex-y-center justify-between'>
              <span className='text-white/70 text-[1rem] leading-[150%] xsm:text-[0.875rem]'>
                {formatDateDMY(blog.published)}
              </span>
              <ICArrow className='size-5' />
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className='w-full h-full group'>
      <Link
        href={`/blog/${blog.slug}`}
        className='flex-y-center'
      >
        <div className='relative w-29.75 h-31.25 rounded-[1.125rem] overflow-hidden'>
          <Image
            src={blog.thumbnail.url}
            alt={decode(blog.title)}
            fill
            className='object-cover lg:group-hover:scale-110 transition-transform duration-350'
          />
          <div className='absolute inset-0 opacity-[0.2] bg-black pointer-events-none' />
        </div>
        <div className='flex flex-col gap-3 flex-1 p-4'>
          <div className='flex-y-center gap-3'>
            <span className='text-[rgba(16,71,95,0.80)] text-[1rem] leading-[150%]'>
              {formatDateDMY(blog.published)}
            </span>
            <span className='flex-center min-w-22 h-7.25 px-3 rounded-[6rem] bg-[#8CC63F] text-white text-[0.875rem] leading-[150%]'>
              {blog.taxonomies.category[0].name}
            </span>
          </div>
          <h3 className='text-[#10475F] text-[1.25rem] font-medium leading-[130%] line-clamp-2'>
            {decode(blog.title)}
          </h3>
        </div>
      </Link>
    </article>
  )
}
