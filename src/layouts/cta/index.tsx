'use client'

import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { IMedia } from '@/interfaces/media.interface'
const ScrollToTopIcon = ({
  circleRef,
}: {
  circleRef: React.RefObject<SVGCircleElement | null>
}) => {
  return (
    <svg
      width='61'
      height='61'
      viewBox='0 0 61 61'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='size-[3rem] xsm:size-[2.5rem]'
    >
      <g clipPath='url(#clip0_604_10721)'>
        <circle
          id='circle'
          ref={circleRef}
          cx='30.4477'
          cy='30.3598'
          r='28.8142'
          stroke='#27AAE1'
          strokeWidth='1.82947'
        />
        <path
          d='M30.0777 41.7945L30.0777 21.6703'
          stroke='#27AAE1'
          strokeWidth='3.65894'
        />
        <path
          d='M20.9648 30.7812L30.0726 21.6735L39.1804 30.7812'
          stroke='#27AAE1'
          strokeWidth='3.65894'
        />
      </g>
      <defs>
        <clipPath id='clip0_604_10721'>
          <rect
            width='59.4578'
            height='59.4578'
            fill='white'
            transform='translate(0.71875 0.630859)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const QuickSearchIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      fill='none'
      className='size-[2rem] text-white'
    >
      <path
        d='M16 27.9551C22.6026 27.9551 27.9551 22.6026 27.9551 16C27.9551 9.39739 22.6026 4.04492 16 4.04492C9.39739 4.04492 4.04492 9.39739 4.04492 16C4.04492 22.6026 9.39739 27.9551 16 27.9551Z'
        stroke='currentColor'
        strokeWidth='1.50742'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M30.1312 30.1309L26.667 26.6667'
        stroke='currentColor'
        strokeWidth='1.50742'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.0575 17.7901C21.0425 18.4472 21.0946 19.2643 21.0353 20.0787C20.9989 20.577 20.6917 20.9111 20.2715 21.1285C20.1566 21.1879 20.0031 21.1829 19.8668 21.1836C19.216 21.189 18.5649 21.1748 17.9145 21.189C17.251 21.2035 16.7568 20.5533 16.7512 20.0102C16.7441 19.3026 16.749 18.5946 16.7478 17.8866C16.7478 17.668 16.6686 17.5188 16.4624 17.4866C16.1324 17.4346 15.7956 17.4181 15.4636 17.5019C15.304 17.5421 15.25 17.6474 15.2511 17.8081C15.2548 18.4587 15.2567 19.109 15.2503 19.7596C15.2484 19.9613 15.2473 20.1706 15.1752 20.3604C15.0701 20.639 14.8707 20.8465 14.6409 21.029C14.4595 21.1733 14.2504 21.1821 14.0412 21.184C13.4156 21.1898 12.7885 21.1622 12.1641 21.1924C11.4656 21.2265 10.9381 20.5254 10.9399 19.9919C10.9444 18.4932 10.9212 16.9941 10.9512 15.4961C10.967 14.6947 11.2907 14.0074 11.9215 13.4949C12.7209 12.8451 13.5245 12.1998 14.3176 11.5416C14.642 11.2725 14.9589 10.987 15.3735 10.8902C15.8962 10.7681 16.4151 10.7623 16.9269 11.0008C17.3434 11.1948 17.6543 11.5213 18.0043 11.798C18.6854 12.3364 19.3606 12.8833 20.0248 13.4425C20.4195 13.7751 20.7139 14.1842 20.881 14.6928C21.012 15.0924 21.0605 15.4938 21.0586 15.9091C21.056 16.4832 21.0579 17.0568 21.0579 17.7897L21.0575 17.7901ZM11.9865 17.6657C11.9865 18.399 11.9865 19.1323 11.9865 19.8656C11.9865 20.1143 12.0604 20.189 12.3124 20.1894C12.8193 20.1901 13.3259 20.1897 13.8328 20.1894C14.1291 20.1894 14.2357 20.0814 14.2361 19.7772C14.2368 19.1269 14.2387 18.4763 14.235 17.8261C14.2338 17.616 14.2357 17.4124 14.3397 17.2191C14.5151 16.893 14.7423 16.6389 15.1005 16.5122C15.5391 16.3572 15.9901 16.3951 16.4358 16.412C16.6532 16.42 16.8856 16.4724 17.0779 16.5938C17.5507 16.8923 17.7914 17.3175 17.7737 17.9023C17.7542 18.5521 17.7688 19.2027 17.7696 19.8533C17.7696 20.0914 17.865 20.189 18.097 20.1894C18.6227 20.1905 19.148 20.1901 19.6737 20.1894C19.9141 20.1894 20.0504 20.052 20.0508 19.8036C20.0515 18.4453 20.0616 17.0871 20.0451 15.7292C20.0395 15.2761 19.9062 14.8425 19.6103 14.4865C19.3685 14.1953 19.0422 14.0013 18.759 13.7571C18.3013 13.3625 17.8435 12.9641 17.3576 12.6074C16.9897 12.3372 16.7107 11.938 16.2 11.8581C15.8703 11.8064 15.6003 11.8757 15.351 12.0448C15.0652 12.2389 14.8076 12.4761 14.5387 12.6954C14.1415 13.0192 13.7517 13.3526 13.3454 13.6637C13.1377 13.8225 12.9492 14.0036 12.7367 14.157C12.2613 14.5011 11.9857 14.9676 11.9872 15.5803C11.9891 16.2753 11.9876 16.9703 11.9876 17.6654L11.9865 17.6657Z'
        fill='currentColor'
      />
      <path
        d='M15.8911 13.948C15.8911 14.3724 15.9264 14.3372 15.507 14.3368C15.0582 14.3361 15.1033 14.3801 15.1026 13.9308C15.1022 13.4903 15.0643 13.5331 15.4957 13.5331C15.9354 13.5331 15.8896 13.4891 15.8911 13.948Z'
        fill='currentColor'
      />
      <path
        d='M16.4751 13.5327C16.9058 13.5335 16.8678 13.4902 16.8675 13.9315C16.8675 14.3804 16.9103 14.3353 16.4619 14.3364C16.0429 14.3372 16.0789 14.3716 16.0789 13.9464C16.0789 13.9399 16.0789 13.9338 16.0789 13.9273C16.0789 13.4868 16.0432 13.5339 16.4751 13.5327Z'
        fill='currentColor'
      />
      <path
        d='M15.4536 15.2933C15.0236 15.2933 15.0646 15.3312 15.0646 14.8907C15.0646 14.4533 15.0229 14.4893 15.4555 14.49C15.8989 14.4908 15.852 14.4464 15.8527 14.9026C15.8535 15.3404 15.8895 15.2922 15.4536 15.2937V15.2933Z'
        fill='currentColor'
      />
      <path
        d='M16.476 14.4896C16.9075 14.49 16.8677 14.4494 16.8677 14.8895C16.8677 15.3323 16.9108 15.2937 16.4805 15.2933C16.0359 15.2929 16.0798 15.3381 16.0791 14.8846C16.0783 14.4467 16.0431 14.4907 16.476 14.49V14.4896Z'
        fill='currentColor'
      />
    </svg>
  )
}

const CTA = ({ data }: { data: { icon: IMedia; link: string }[] }) => {
  const circleRef = useRef<SVGCircleElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const mobileBarRef = useRef<HTMLDivElement | null>(null)
  const isMobileVisibleRef = useRef(false)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    const radius = circle.r.baseVal.value
    const circumference = 2 * Math.PI * radius

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = `${circumference}`
    circle.style.transform = 'rotate(-90deg)'
    circle.style.transformOrigin = '50% 50%'

    let rafId: number | null = null
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? Math.min(Math.max(scrollTop / height, 0), 1) : 0
      const offset = circumference - progress * circumference
      circle.style.strokeDashoffset = `${offset}`
      rafId = null
    }

    const throttledUpdate = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
    window.addEventListener('scroll', throttledUpdate, { passive: true })
    window.addEventListener('resize', throttledUpdate)

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', throttledUpdate)
      window.removeEventListener('resize', throttledUpdate)
    }
  }, [])
  useEffect(() => {
    const el = mobileBarRef.current
    if (!el) return

    gsap.set(el, {
      y: 96,
      autoAlpha: 0,
      pointerEvents: 'none',
    })

    let rafId: number | null = null

    const setMobileVisible = (nextVisible: boolean) => {
      if (isMobileVisibleRef.current === nextVisible) return
      isMobileVisibleRef.current = nextVisible

      gsap.killTweensOf(el)

      if (nextVisible) {
        gsap.to(el, {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: true,
          onStart: () => {
            el.style.pointerEvents = 'auto'
          },
        })
      } else {
        gsap.to(el, {
          y: 96,
          autoAlpha: 0,
          duration: 0.35,
          ease: 'power2.in',
          overwrite: true,
          onComplete: () => {
            el.style.pointerEvents = 'none'
          },
        })
      }
    }

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setMobileVisible(scrollTop > 200)
      rafId = null
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(update)
    }

    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      gsap.killTweensOf(el)
    }
  }, [])
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const mobileItems = data.slice(0, 2)
  return (
    <>
      {/* mobile */}
      <div
        ref={mobileBarRef}
        className='fixed inset-x-0 bottom-0 z-[50] hidden xsm:block pb-[env(safe-area-inset-bottom)]'
      >
        <div className='flex h-[4.25rem] w-full bg-white shadow-[0_-0.25rem_1.5rem_rgba(0,0,0,0.12)]'>
          {mobileItems.map((item, index) => (
            <Link
              key={item.link}
              href={item.link}
              target='_blank'
              className={`flex flex-col items-center justify-center px-[0.5rem] w-[5.2rem] h-[4rem] ${
                index !== mobileItems.length - 1 ? 'border-r border-[#e5e7eb]' : ''
              }`}
            >
              <div className='rounded-full size-[2.25rem] bg-[#10475F]/10 flex  items-center justify-center'>
                <Image
                  src={item.icon.url}
                  alt={item.icon.alt}
                  width={24}
                  height={24}
                  unoptimized
                  className=' object-contain size-[1rem]'
                />
              </div>{' '}
              <span className='text-center text-[#10475F] text-[0.625rem] font-normal font-halyard-display leading-[1.5] text-left'>
                {item.link.includes('tel:') ? '0986.394.244' : 'Kết nối Zalo'}
              </span>
            </Link>
          ))}

          <button
            type='button'
            className='flex flex-1 min-w-0 items-center justify-center bg-[#20a8e0] text-left text-white'
          >
            <div className='mr-[0.5rem]  flex h-[2rem] w-[2rem] items-center justify-center rounded-full border border-white'>
              <QuickSearchIcon />
            </div>

            <div className='flex flex-col'>
              <span className='text-white text-[0.875rem] font-medium font-halyard-display leading-[1.5] text-left'>
                Tìm kiếm nhanh
              </span>
              <span className='text-[0.75rem] leading-[1rem] text-white/90 text-white/80 text-[0.75rem] font-normal font-halyard-display leading-[1.5] text-left'>
                Combo du lịch + Khách sạn
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* desktop */}
      <div
        ref={containerRef}
        className='fixed xsm:right-4 right-8 bottom-16 xsm:bottom-20 z-[10000] flex flex-col items-center space-y-4 will-change-transform'
      >
        {data.map((item, index) => (
          <Link
            href={item.link}
            target='_blank'
            key={item.link}
            className='relative shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-full w-[3rem] h-[3rem] flex items-center justify-center bg-white xsm:hidden'
          >
            {index === data.length - 1 && <div className='ripple_video' />}
            <Image
              src={item.icon.url}
              alt={item.icon.alt}
              width={24}
              height={24}
              unoptimized
              className='object-contain xsm:size-[1.5rem]'
            />
          </Link>
        ))}
        <button
          type='button'
          onClick={handleScrollToTop}
          aria-label='Scroll to top'
          className='cursor-pointer h-full w-full bg-[white] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.08)]'
        >
          <ScrollToTopIcon circleRef={circleRef} />
        </button>
      </div>
    </>
  )
}

export default CTA
