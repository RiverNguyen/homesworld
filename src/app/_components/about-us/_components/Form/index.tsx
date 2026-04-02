import Image from 'next/image'
import Link from 'next/link'

import ICRight from '@/components/icons/ICRight'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import { IAboutUs } from '@/interfaces/about-us'

type IconProps = React.SVGProps<SVGSVGElement>

// css

const cardShadowClass =
  'shadow-[0rem_0.75rem_1.6875rem_0rem_rgba(0,0,0,0.1),0rem_3.0625rem_3.0625rem_0rem_rgba(0,0,0,0.09),0rem_6.875rem_4.125rem_0rem_rgba(0,0,0,0.05),0rem_12.1875rem_4.875rem_0rem_rgba(0,0,0,0.01),0rem_19.0625rem_5.3125rem_0rem_rgba(0,0,0,0)]'

const cardBaseClass = `${cardShadowClass} relative overflow-hidden rounded-[1.125rem] bg-white`
const cardTitleClass =
  'pc-2x-24-m text-[#27AAE1] xsm:text-[1.25rem] xsm:font-medium xsm:leading-[1.1]'
const cardDescClass = 'pc-14-14-r text-[#10475F]/80 r-14'

const partnerOverlayStyle = {
  background:
    'radial-gradient(110.08% 110.08% at 50% 110.08%, rgba(39, 170, 225, 0.94) 0%, rgba(201, 234, 247, 0.94) 41.16%, rgba(255, 255, 255, 0.94) 79.16%), rgba(255, 255, 255, 0.94)',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
}

const policyOverlayStyle = {
  background:
    'radial-gradient(120% 100% at 100% 100%, rgba(39,170,225,0.9) 0%, rgba(201,234,247,0.6) 40%, rgba(255,255,255,0) 75%)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
}
type LayoutProps = {
  acfData: IAboutUs
}

const Layout = ({ acfData }: LayoutProps) => {
  const socialItems = acfData?.distinctive?.social_media?.social ?? []
  const policyLink = acfData?.distinctive?.group_3?.link
  const policyHref = policyLink?.url || '#'
  const isExternalPolicy = policyHref.startsWith('http')
  return (
    <div className='w-full max-w-[83.5rem] xsm:px-[1rem] xsm:mt-[3.28rem]'>
      <div className='flex items-center justify-between xsm:flex-col xsm:items-center'>
        <h2 className='z-50 text-left font-montserrat text-[2.875rem] font-semibold leading-[1.3] tracking-[-0.15625rem] text-white xsm:s-25-mon xsm:text-center  xsm:tracking-[-0.08rem] xsm:max-w-[13.875rem]'>
          {acfData?.distinctive?.title}
        </h2>

        <p className='z-50 max-w-[24.8125rem] text-left font-halyard-display text-[1rem] font-normal leading-[1.5] text-white xsm:mt-[0.62rem] xsm:max-w-full xsm:text-center xsm:r-14'>
          {acfData?.distinctive?.desc}
        </p>
      </div>

      <div className='mt-[0.75rem] flex w-full xsm:block'>
        <div className='flex w-full xsm:block'>
          <div className='mr-[1rem] flex-1 xsm:mr-0 xsm:w-full xsm:flex-none'>
            <div className='mb-[1rem] flex xsm:mb-[0.75rem] xsm:block'>
              {/* cột trên trái 1 */}
              <div
                className={`${cardBaseClass} group mr-[1rem] flex h-[16.4375rem] flex-1 flex-col justify-between xsm:mr-0 xsm:h-[13.63rem] xsm:w-full`}
              >
                <div className='relative z-20 m-[1.5rem] xsm:mx-[1.25rem] xsm:h-[11rem]'>
                  <p
                    className='
        pc-2x-24-m
        text-[#27AAE1]
        transition-colors
        duration-500
        ease-out
        md:group-hover:text-white
        xsm:text-[1.25rem]
        xsm:font-medium
        xsm:leading-[1.1]
      '
                  >
                    {acfData?.distinctive?.group_1?.title}
                  </p>

                  <p
                    className='
        pc-14-14-r
        mt-[0.25rem]
        text-[#10475F]/80
        transition-colors
        duration-500
        ease-out
        md:group-hover:text-white/90 xsm:r-14 '
                  >
                    {acfData?.distinctive?.group_1?.desc}
                  </p>
                </div>

                <div className='absolute top-[0.25rem] right-[0.25rem] bottom-[0.25rem] left-[0.25rem] overflow-hidden rounded-[1.125rem]'>
                  <div className='relative h-full w-full'>
                    <div
                      className='
          absolute
          right-0
          bottom-0
          left-0
          h-[10rem]
          transition-all
          duration-500
          ease-out
          md:group-hover:h-full
          md:group-hover:-translate-y-[1.5rem]
          xsm:h-[8rem]
        '
                    >
                      <Image
                        src={acfData?.distinctive?.group_1?.image}
                        fill
                        alt='Description'
                        className='
            rounded-[1.125rem]
            object-cover
            transition-transform
            duration-500
            ease-out
            md:group-hover:scale-[1.2]
          '
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* cột trên trái 2 */}
              <div
                className={`${cardBaseClass} group flex h-[16.4375rem] xsm:h-[13.88rem] flex-1 flex-col justify-between xsm:mt-[0.75rem] xsm:w-full`}
              >
                <div
                  className='pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-0 opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:opacity-100'
                  style={partnerOverlayStyle}
                />

                <div className='relative z-20 m-[1.5rem] xsm:m-[1.25rem] '>
                  <p className={`${cardTitleClass} max-w-[11rem]  xsm:max-w-[9.25rem]`}>
                    {acfData?.distinctive?.group_2?.title}
                  </p>
                  <p
                    className={`${cardDescClass} mt-[0.6rem] max-w-[23.5rem] xsm:max-w-full  text-trim-trim-both text-edge-[cap_alphabetic] xsm:mt-[0.5rem]`}
                  >
                    {acfData?.distinctive?.group_2?.desc}
                  </p>
                </div>

                <div className='mx-[1.5rem] mb-[1.5rem] mt-auto flex items-center justify-end z-[100] xsm:mx-[1.25rem] xsm:mb-[1.25rem]'>
                  <div className='flex items-center'>
                    {acfData?.distinctive?.group_2?.gallery?.slice(0, 3).map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className={index !== 0 ? 'ml-[-0.46rem]' : ''}
                      >
                        <div className='relative size-[3.5rem] overflow-hidden rounded-full border-[0.15217rem] border-white/90'>
                          <Image
                            src={image}
                            alt={`partner-avatar-${index + 1}`}
                            fill
                            className='object-cover'
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p
                    className='
    ml-[-0.46rem]
    flex min-h-[3.14rem] max-w-[10.2rem] items-center
    rounded-[76.08695rem]
    bg-[#8CC63F]
    px-[1.06522rem]
    pt-[0.53261rem]
    pb-[0.6087rem]
gap-[0.76087rem]
    pt-[0.53261rem] pb-[0.6087rem] px-[1.06522rem]
    text-left
    text-white
    whitespace-pre-line
   max-w-[7.6923rem]!
   h-[3.14rem]!
    text-[0.75rem]
    font-normal
    leading-[130%]
  '
                  >
                    {String(acfData?.distinctive?.group_2?.desc_gallery ?? '').replace(
                      /<br\s*\/?>/gi,
                      '\n',
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* cột trên trái dưới trái */}
            <div
              className={`${cardBaseClass} group/policy relative h-[10.6875rem] w-full p-[1.5rem] cursor-pointer xsm:h-[11.81rem] xsm:p-[1.25rem]`}
            >
              <div
                className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover/policy:opacity-100'
                style={policyOverlayStyle}
              />

              <div className='relative z-10 flex h-full flex-col justify-between'>
                <div className='flex items-center justify-between xsm:flex-col xsm:items-start'>
                  <div className='ml-[4.9rem] flex items-center justify-center xsm:ml-0 xsm:w-full xsm:justify-start'>
                    <Image
                      src={acfData?.distinctive?.group_3?.icon || ''}
                      alt='policy icon'
                      width={52}
                      height={52}
                      className='h-[3.25rem] w-[3.25rem] xsm:hidden object-contain'
                    />
                    <p
                      className={`${cardTitleClass} ml-[0.75rem] max-w-[12.68rem] xsm:ml-0 xsm:w-full xsm:max-w-full`}
                    >
                      {acfData?.distinctive?.group_3?.title}
                    </p>
                  </div>

                  <p className='pc-14-14-r max-w-[24.5625rem] text-[#10475F]/80 xsm:mt-[0.5rem] xsm:max-w-full'>
                    {acfData?.distinctive?.group_3?.desc}
                  </p>
                </div>

                <ICHorizontalDashedLine className='h-px w-full text-[#10475F] xsm:my-[1rem] xsm:hidden' />

                <div className='flex justify-end xsm:justify-start cusor-pointer'>
                  <ButtonPrimary
                    type='link'
                    href={policyHref}
                    target={isExternalPolicy ? '_blank' : undefined}
                    rel={isExternalPolicy ? 'noopener noreferrer' : undefined}
                    hideDefaultIcon
                    className='
    relative
    pr-[1rem]
    transition-all
    duration-300
     xsm:group-hover/policy:pr-[2rem]
    pc-14-14-r-button
    xsm:w-full
    xsm:font-normal!
    xsm:text-[0.8125rem]
  '
                    rightIcon={
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        className='hidden xsm:block size-[0.55863rem]'
                      >
                        <path
                          d='M11.7356 11.4832L11.8125 2.1875C9.48489 2.21014 4.84544 2.24182 2.51786 2.26446L2.49862 3.42782C4.59316 3.40744 7.37221 3.39046 9.81771 3.36784L2.1875 10.9988L3.00109 11.8125L10.6313 4.18151L10.5657 11.4956L11.7357 11.4819L11.7356 11.4832Z'
                          fill='white'
                        />
                      </svg>
                    }
                  >
                    {policyLink?.title}
                  </ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          {/* cột phải  */}
          <div
            className={`${cardBaseClass} z-[107] w-[21rem] py-[1.5rem] xsm:mt-[0.75rem] xsm:w-full xsm:py-[1.25rem] xsm:h-[9rem]`}
          >
            <p className='pc-2x-24-m mx-[1.5rem] mb-[1.5rem] text-[#27AAE1] xsm:mx-[1.25rem] xsm:mb-[1.11rem] xsm:text-[1.25rem] xsm:font-medium xsm:leading-[1.1]'>
              {acfData?.distinctive?.social_media?.title?.split(/\r?\n/).map((line, index) => (
                <span
                  key={index}
                  className='block'
                >
                  {line}
                </span>
              ))}
            </p>

            <div className='cursor-pointer xsm:ml-[1.25rem] xsm:flex xsm:overflow-x-auto xsm:whitespace-nowrap'>
              {socialItems.map((item, index) => {
                const href = item.link?.url || '#'
                const isExternal = href.startsWith('http')
                // const isPhone = href.startsWith('tel:')

                return (
                  <Link
                    key={`${item.name}-${index}`}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className='flex w-full cursor-pointer flex-col items-start transition-colors duration-300 hover:bg-[#10475F]/10 xsm:w-auto xsm:flex-none xsm:hover:bg-transparent group'
                  >
                    <ICHorizontalDashedLine336 className='block h-px w-full text-[#10475F] xsm:hidden' />

                    <div className='flex justify-between items-center w-full'>
                      <div className='my-[0.88rem] ml-[1.5rem] mr-[1.5rem] flex w-auto items-center justify-start rounded-[0.75rem] xsm:my-0 xsm:ml-0 xsm:mr-[0.75rem]'>
                        <Image
                          src={item.icon}
                          className='size-[2.875rem] object-contain xsm:size-[2.375rem]'
                          width={20}
                          height={20}
                          alt={item.name}
                        />

                        <div className='ml-[0.5rem] min-w-0 xsm:hidden'>
                          <p className='pc-14-14-r font-semibold text-[#10475F] leading-[1] text-trim-both text-edge-[cap_alphabetic]'>
                            {item.name}
                          </p>

                          <p className='pc-14-14-r break-all text-[#10475F]/80 leading-[1] text-trim-both text-edge-[cap_alphabetic] mt-[0.25rem]'>
                            {item.link?.title}
                          </p>
                        </div>
                      </div>
                      <ICRight className='size-[0.75rem] text-[#10475F] mr-[1.5rem] opacity-0 group-hover:opacity-100 xsm:hidden' />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout

export const socialContactData = [
  {
    id: 'tiktok',
    title: 'TikTok',
    value: '@homesworldtaxua',
    href: 'https://www.tiktok.com/@homesworldtaxua',
    icon: '/ve-chung-toi/d-titok.svg',
  },
  {
    id: 'facebook',
    title: 'Facebook',
    value: '@homesworldtaxua',
    href: 'https://www.facebook.com/homesworldtaxua',
    icon: '/ve-chung-toi/d-ig.svg',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    value: '@homesworldtaxua',
    href: 'https://www.instagram.com/homesworldtaxua',
    icon: '/ve-chung-toi/d-IconInstagram.svg',
  },
  {
    id: 'hotline',
    title: 'Liên hệ nhanh',
    value: 'Gọi: 0928482491',
    href: 'tel:0928482491',
    icon: '/ve-chung-toi/d-fb.svg',
  },
]
export function ICPolicyShield(props: IconProps) {
  return (
    <svg
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1914_3698)'>
        <path
          d='M50.4278 13.1889C49.0638 8.16359 43.8374 2.93719 38.8121 1.5732C35.7317 0.804375 31.6032 0.0132032 26 4.58212e-08C20.3978 0.0142188 16.2693 0.804375 13.1889 1.5732C8.16359 2.9382 2.93719 8.16359 1.5732 13.1889C0.804375 16.2693 0.0142188 20.3978 4.11703e-08 26C0.0142188 31.6032 0.804375 35.7317 1.5732 38.8121C2.93719 43.8374 8.16359 49.0628 13.1889 50.4278C16.2693 51.1966 20.3998 51.9868 26 52.001C31.6032 51.9868 35.7317 51.1966 38.8121 50.4278C43.8374 49.0628 49.0638 43.8374 50.4278 38.8121C51.1966 35.7317 51.9868 31.6012 52.001 26C51.9868 20.3978 51.1966 16.2693 50.4278 13.1889Z'
          fill='#E5F4D9'
        />
        <path
          d='M35.1603 25.4625C35.1287 23.666 34.9671 21.8741 34.6769 20.101C34.4902 19.7404 34.1792 19.4597 33.8014 19.3108C31.2837 18.3348 28.8066 17.4025 26.3934 16.6072C26.1489 16.5255 25.8844 16.5255 25.6399 16.6072C23.2257 17.4004 20.7496 18.3338 18.2329 19.3068C17.8973 19.4369 17.6124 19.6716 17.4204 19.976C17.4346 19.976 16.9034 21.6376 16.811 25.304C16.7572 28.9704 17.2173 30.0683 17.198 30.0693C17.4458 30.8747 17.9089 31.6943 18.5711 32.5282C19.3115 33.4595 20.3129 34.4213 21.5215 35.3658C22.7554 36.3358 24.079 37.186 25.4743 37.9049C25.6406 37.9876 25.8238 38.0304 26.0095 38.0298C26.1955 38.03 26.379 37.9873 26.5458 37.9049C27.9416 37.1831 29.2658 36.3306 30.5006 35.3587C31.7092 34.4132 32.7106 33.4514 33.452 32.5211C34.163 31.6283 34.6423 30.7528 34.8739 29.8926C34.8709 29.8936 35.207 28.5479 35.1603 25.4625Z'
          fill='url(#paint0_linear_1914_3698)'
        />
        <path
          d='M37.4848 15.5399C34.7906 12.8309 31.2219 11.1666 27.4149 10.8437L27.4565 10.8031C27.6535 10.5696 27.7556 10.2708 27.7427 9.96561C27.7298 9.66046 27.6028 9.37127 27.3868 9.1553C27.1709 8.93934 26.8817 8.81233 26.5765 8.79943C26.2714 8.78653 25.9725 8.88867 25.7391 9.08564L23.716 11.1118C23.4893 11.3401 23.3621 11.6488 23.3621 11.9705C23.3621 12.2923 23.4893 12.6009 23.716 12.8292L25.7472 14.8605C25.9617 15.0759 26.2493 15.203 26.5531 15.2166C26.8568 15.2301 27.1546 15.1292 27.3875 14.9337C27.6204 14.7382 27.7714 14.4625 27.8107 14.161C27.85 13.8595 27.7747 13.5542 27.5997 13.3056C34.4653 14.1028 39.8126 19.9518 39.8126 27.0277C39.8126 34.6449 33.6173 40.8402 26.0001 40.8402C18.3829 40.8402 12.1876 34.6449 12.1876 27.0277C12.1876 24.2503 13.0245 21.5373 14.589 19.2425C16.1535 16.9477 18.3732 15.1775 20.9585 14.1627C21.1205 14.1149 21.2708 14.0338 21.3998 13.9248C21.5287 13.8158 21.6337 13.6811 21.7079 13.5294C21.7821 13.3776 21.8239 13.2121 21.8308 13.0434C21.8376 12.8746 21.8093 12.7063 21.7476 12.549C21.686 12.3918 21.5923 12.2491 21.4725 12.13C21.3528 12.0108 21.2096 11.9179 21.052 11.8571C20.8945 11.7962 20.726 11.7688 20.5572 11.7765C20.3885 11.7843 20.2232 11.827 20.0719 11.902C16.813 13.1781 14.0531 15.4723 12.203 18.4433C10.353 21.4142 9.51151 24.9031 9.80389 28.3907C10.0963 31.8784 11.5068 35.1784 13.8257 37.7999C16.1446 40.4213 19.2479 42.224 22.6738 42.9398C26.0997 43.6555 29.6652 43.2461 32.8397 41.7723C36.0141 40.2986 38.628 37.8393 40.2923 34.7605C41.9565 31.6816 42.5823 28.1477 42.0765 24.6845C41.5706 21.2214 39.9602 18.0141 37.4848 15.5399Z'
          fill='url(#paint1_linear_1914_3698)'
        />
        <path
          d='M25.1461 25.645C25.3723 25.8716 25.6791 25.9991 25.9992 25.9995C26.5904 25.9996 27.1683 26.1748 27.6601 26.503C28.1518 26.8312 28.5354 27.2977 28.7623 27.8436C28.9892 28.3895 29.0494 28.9904 28.9353 29.5704C28.8211 30.1505 28.5377 30.6838 28.1209 31.103C27.7759 31.445 27.3542 31.6995 26.891 31.8454L26.891 32.3979C26.891 32.6344 26.797 32.8612 26.6298 33.0284C26.4625 33.1957 26.2357 33.2896 25.9992 33.2896C25.7627 33.2896 25.5359 33.1957 25.3687 33.0284C25.2015 32.8612 25.1075 32.6344 25.1075 32.3979L25.1075 31.8424C24.4982 31.654 23.9654 31.2753 23.5872 30.7619C23.209 30.2484 23.0053 29.6272 23.0062 28.9895C23.0062 28.753 23.1001 28.5262 23.2674 28.3589C23.4346 28.1917 23.6614 28.0977 23.8979 28.0977C24.1344 28.0977 24.3612 28.1917 24.5284 28.3589C24.6957 28.5262 24.7896 28.753 24.7896 28.9895C24.7903 29.3108 24.9185 29.6188 25.1461 29.8456C25.3792 30.0621 25.6859 30.1819 26.004 30.1807C26.3221 30.1796 26.6279 30.0576 26.8595 29.8395C27.0836 29.6134 27.2092 29.3078 27.2088 28.9895C27.2098 28.8303 27.1792 28.6724 27.1187 28.5251C27.0583 28.3779 26.9693 28.244 26.8568 28.1313C26.7443 28.0187 26.6106 27.9294 26.4634 27.8687C26.3162 27.808 26.1584 27.7772 25.9992 27.7778C25.4078 27.7779 24.8297 27.6027 24.3377 27.2745C23.8458 26.9463 23.4621 26.4796 23.2351 25.9335C23.0081 25.3874 22.948 24.7863 23.0623 24.2061C23.1767 23.6258 23.4604 23.0924 23.8776 22.6733C24.2228 22.3319 24.6444 22.0777 25.1075 21.9319L25.1075 21.3763C25.1075 21.1398 25.2015 20.913 25.3687 20.7458C25.5359 20.5786 25.7627 20.4846 25.9992 20.4846C26.2357 20.4846 26.4625 20.5786 26.6298 20.7458C26.797 20.913 26.891 21.1398 26.891 21.3763L26.891 21.937C27.4969 22.1279 28.0267 22.506 28.4043 23.017C28.7819 23.5279 28.9877 24.1454 28.9923 24.7807C28.9923 25.0172 28.8983 25.244 28.7311 25.4113C28.5639 25.5785 28.3371 25.6724 28.1006 25.6724C27.8641 25.6724 27.6373 25.5785 27.47 25.4113C27.3028 25.244 27.2088 25.0172 27.2088 24.7807C27.2084 24.5818 27.1589 24.386 27.0647 24.2108C26.9705 24.0356 26.8346 23.8863 26.6689 23.7761C26.5033 23.666 26.313 23.5984 26.115 23.5794C25.9169 23.5603 25.7173 23.5904 25.5337 23.667C25.35 23.7436 25.1882 23.8643 25.0623 24.0184C24.9365 24.1724 24.8506 24.3552 24.8123 24.5504C24.774 24.7456 24.7844 24.9473 24.8426 25.1375C24.9008 25.3277 25.0051 25.5006 25.1461 25.6409L25.1461 25.645Z'
          fill='url(#paint2_linear_1914_3698)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_1914_3698'
          x1='33.2042'
          y1='32.8958'
          x2='18.825'
          y2='18.5156'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8CC63F' />
          <stop
            offset='0.52'
            stopColor='#7AB033'
          />
          <stop
            offset='1'
            stopColor='#CBF4B4'
          />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1914_3698'
          x1='33.2039'
          y1='32.897'
          x2='13.0004'
          y2='15.826'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8CC63F' />
          <stop
            offset='0.52'
            stopColor='#7BAF36'
          />
          <stop
            offset='1'
            stopColor='#CBF4B4'
          />
        </linearGradient>
        <linearGradient
          id='paint2_linear_1914_3698'
          x1='29.3843'
          y1='30.2712'
          x2='22.6142'
          y2='23.501'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CBF4B4' />
          <stop
            offset='0.57'
            stopColor='white'
          />
          <stop
            offset='1'
            stopColor='white'
          />
        </linearGradient>
        <clipPath id='clip0_1914_3698'>
          <rect
            width='52'
            height='52'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function ICHorizontalDashedLine(props: IconProps) {
  return (
    <svg
      viewBox='0 0 942 1'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line
        opacity='0.2'
        x1='942'
        y1='0.5'
        x2='7.91715e-10'
        y2='0.500002'
        stroke='currentColor'
        strokeDasharray='4 4'
      />
    </svg>
  )
}

export function ICHorizontalDashedLine336(props: IconProps) {
  return (
    <svg
      viewBox='0 0 336 1'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line
        opacity='0.2'
        x1='336'
        y1='0.5'
        x2='7.91715e-10'
        y2='0.500001'
        stroke='currentColor'
        strokeDasharray='4 4'
      />
    </svg>
  )
}
