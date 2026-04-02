import Image from 'next/image'
import { ReactNode } from 'react'

import ICExpand from '@/components/icons/ICExpand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ListRoomDetailCombo = () => {
  return (
    <div className='pt-[1.5rem]'>
      <h3 className='pc-18-18-m text-[#10475F] text-fit mb-[1.2rem]'>Danh sách phòng</h3>
      <div className='flex gap-2'>
        <RoomCard className='mr-[1.125rem] last:mr-0'></RoomCard>
        <RoomCard className='mr-[1.125rem] last:mr-0'></RoomCard>
        <RoomCard className='mr-[1.125rem] last:mr-0'></RoomCard>
      </div>
    </div>
  )
}

const RoomCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'xsm:w-[19.5625rem] group w-[21.8125rem] rounded-[0.75rem] bg-white shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden',
        className,
      )}
    >
      <div className='xsm:h-[10.875rem] pt-[0.25rem] px-[0.25rem] self-stretch w-full h-[12.625rem] '>
        <div className='relative size-full rounded-[0.5rem] overflow-hidden'>
          <Image
            className='object-cover size-full group-hover:scale-[1.09] anim'
            width={341}
            height={198}
            alt=''
            src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/main_image.webp'}
          ></Image>
          <div className='absolute top-0 left-0 size-full bg-[linear-gradient(180deg,_rgba(6,6,6,0)_0%,_rgba(6,6,6,0.1)_15.89%,_rgba(6,6,6,1)_95.25%)] opacity-[0.7]'></div>
          <div className='absolute bottom-0 right-0 p-[0.75rem]'>
            <ICExpand></ICExpand>
          </div>
        </div>
      </div>
      <div className='xsm:p-[0.75rem] p-[0.875rem]'>
        <h3 className='xsm:mb-18-s pc-2x-20-m font-semibold text-[#10475F] group-hover:text-[#27AAE1] group-hover:underline anim'>
          Phòng Đôi Superior
        </h3>
        <SvgLine
          width={321}
          className='xsm:my-[0.875rem] my-[1rem]'
        ></SvgLine>
        <div className='flex'>
          <div className='xsm:mr-[1.75rem] mr-[2.5rem]'>
            <div className='flex'>
              <svg
                className='size-[1.125rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M13.4996 5.37C13.4546 5.3625 13.4021 5.3625 13.3571 5.37C12.3221 5.3325 11.4971 4.485 11.4971 3.435C11.4971 2.3625 12.3596 1.5 13.4321 1.5C14.5046 1.5 15.3671 2.37 15.3671 3.435C15.3596 4.485 14.5346 5.3325 13.4996 5.37Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12.7266 10.8301C13.7541 11.0026 14.8866 10.8226 15.6816 10.2901C16.7391 9.58512 16.7391 8.43012 15.6816 7.72512C14.8791 7.19262 13.7316 7.01262 12.7041 7.19262'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.47785 5.37C4.52285 5.3625 4.57535 5.3625 4.62035 5.37C5.65535 5.3325 6.48035 4.485 6.48035 3.435C6.48035 2.3625 5.61785 1.5 4.54535 1.5C3.47285 1.5 2.61035 2.37 2.61035 3.435C2.61785 4.485 3.44285 5.3325 4.47785 5.37Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.25008 10.8301C4.22258 11.0026 3.09008 10.8226 2.29508 10.2901C1.23758 9.58512 1.23758 8.43012 2.29508 7.72512C3.09758 7.19262 4.24508 7.01262 5.27258 7.19262'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.99957 10.9725C8.95457 10.965 8.90207 10.965 8.85707 10.9725C7.82207 10.935 6.99707 10.0875 6.99707 9.03754C6.99707 7.96504 7.85957 7.10254 8.93207 7.10254C10.0046 7.10254 10.8671 7.97254 10.8671 9.03754C10.8596 10.0875 10.0346 10.9425 8.99957 10.9725Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.81754 13.3355C5.76004 14.0405 5.76004 15.1955 6.81754 15.9005C8.01754 16.703 9.98254 16.703 11.1825 15.9005C12.24 15.1955 12.24 14.0405 11.1825 13.3355C9.99004 12.5405 8.01754 12.5405 6.81754 13.3355Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span className='xsm:mb-14-r pc-14-14-r text-[#10475F] ml-[0.38rem]'>
                Tối đa: 06 người
              </span>
            </div>
            <div className='flex mt-[0.88rem]'>
              <svg
                className='size-[1.125rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.55762 16.5C2.55762 13.5975 5.44511 11.25 9.00011 11.25C9.72011 11.25 10.4176 11.3475 11.0701 11.5275'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.5 13.5C16.5 14.0625 16.3425 14.595 16.065 15.045C15.9075 15.315 15.705 15.555 15.4725 15.75C14.9475 16.2225 14.2575 16.5 13.5 16.5C12.405 16.5 11.4525 15.915 10.935 15.045C10.6575 14.595 10.5 14.0625 10.5 13.5C10.5 12.555 10.935 11.7075 11.625 11.16C12.1425 10.7475 12.795 10.5 13.5 10.5C15.1575 10.5 16.5 11.8425 16.5 13.5Z'
                  stroke='#27AAE1'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12.3301 13.4996L13.0726 14.2421L14.6701 12.7646'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span className='xsm:mb-14-r pc-14-14-r text-[#10475F] ml-[0.38rem]'>
                Tiêu chuẩn: 04 người
              </span>
            </div>
          </div>
          <div>
            <div className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M2.9613 8.99988H15.0387C15.4892 8.99988 15.8547 9.36546 15.8547 9.81592V12.9169L16.3444 12.4272H1.65564L2.14526 12.9169V9.81592C2.14526 9.36546 2.51085 8.99988 2.9613 8.99988ZM2.9613 8.02063C2.48516 8.02063 2.02853 8.20978 1.69184 8.54646C1.35516 8.88314 1.16602 9.33978 1.16602 9.81592L1.16602 12.9169C1.16602 13.1871 1.38537 13.4065 1.65564 13.4065H16.3444C16.4742 13.4065 16.5988 13.3549 16.6906 13.2631C16.7824 13.1713 16.834 13.0467 16.834 12.9169V9.81592C16.834 9.33978 16.6448 8.88314 16.3082 8.54646C15.9715 8.20978 15.5148 8.02063 15.0387 8.02063H2.9613ZM1.16602 12.9169V14.8754C1.16602 15.0052 1.2176 15.1298 1.30942 15.2216C1.40125 15.3134 1.52578 15.365 1.65564 15.365C1.7855 15.365 1.91003 15.3134 2.00186 15.2216C2.09368 15.1298 2.14526 15.0052 2.14526 14.8754V12.9169C2.14526 12.787 2.09368 12.6625 2.00186 12.5707C1.91003 12.4788 1.7855 12.4272 1.65564 12.4272C1.52578 12.4272 1.40125 12.4788 1.30942 12.5707C1.2176 12.6625 1.16602 12.787 1.16602 12.9169ZM15.8547 12.9169V14.8754C15.8547 15.0052 15.9063 15.1298 15.9981 15.2216C16.09 15.3134 16.2145 15.365 16.3444 15.365C16.4742 15.365 16.5988 15.3134 16.6906 15.2216C16.7824 15.1298 16.834 15.0052 16.834 14.8754V12.9169C16.834 12.787 16.7824 12.6625 16.6906 12.5707C16.5988 12.4788 16.4742 12.4272 16.3444 12.4272C16.2145 12.4272 16.09 12.4788 15.9981 12.5707C15.9063 12.6625 15.8547 12.787 15.8547 12.9169ZM15.3651 8.51025V4.10364C15.3651 3.71407 15.2104 3.34046 14.9349 3.06499C14.6594 2.78952 14.2858 2.63477 13.8962 2.63477H4.10376C3.71419 2.63477 3.34058 2.78952 3.06511 3.06499C2.78964 3.34046 2.63489 3.71407 2.63489 4.10364V8.51025C2.63489 8.64011 2.68647 8.76465 2.7783 8.85647C2.87012 8.94829 2.99466 8.99988 3.12451 8.99988C3.25437 8.99988 3.37891 8.94829 3.47073 8.85647C3.56255 8.76465 3.61414 8.64011 3.61414 8.51025V4.10364C3.61414 3.97378 3.66572 3.84924 3.75754 3.75742C3.84937 3.6656 3.9739 3.61401 4.10376 3.61401H13.8962C14.0261 3.61401 14.1506 3.6656 14.2425 3.75742C14.3343 3.84924 14.3859 3.97378 14.3859 4.10364V8.51025C14.3859 8.64011 14.4374 8.76465 14.5293 8.85647C14.6211 8.94829 14.7456 8.99988 14.8755 8.99988C15.0053 8.99988 15.1299 8.94829 15.2217 8.85647C15.3135 8.76465 15.3651 8.64011 15.3651 8.51025ZM6.71509 6.55176H11.2849C11.3282 6.55176 11.3697 6.56895 11.4003 6.59956C11.4309 6.63017 11.4481 6.67168 11.4481 6.71497V8.51025L11.9377 8.02063H6.06226L6.55188 8.51025V6.71497C6.55188 6.67168 6.56907 6.63017 6.59968 6.59956C6.63029 6.56895 6.6718 6.55176 6.71509 6.55176ZM6.71509 5.57251C6.41209 5.57251 6.1215 5.69288 5.90725 5.90713C5.693 6.12138 5.57263 6.41197 5.57263 6.71497V8.51025C5.57263 8.78053 5.79198 8.99988 6.06226 8.99988H11.9377C12.0676 8.99988 12.1921 8.94829 12.284 8.85647C12.3758 8.76465 12.4274 8.64011 12.4274 8.51025V6.71497C12.4274 6.41197 12.307 6.12138 12.0928 5.90713C11.8785 5.69288 11.5879 5.57251 11.2849 5.57251H6.71509Z'
                  fill='#27AAE1'
                />
              </svg>
              <span className='xsm:mb-14-r pc-14-14-r text-[#10475F] ml-[0.38rem]'>02 giường</span>
            </div>
            <div className='flex mt-[0.88rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <path
                  d='M6.90039 8.77539H10.6504'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.77539 10.6504V6.90039'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.5 16.5L15 15'
                  stroke='#27AAE1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span className='xsm:mb-14-r pc-14-14-r text-[#10475F] ml-[0.38rem]'>
                View: View núi
              </span>
            </div>
          </div>
        </div>
        <SvgLine
          width={321}
          className='xsm:my-[0.875rem] my-[1rem]'
        ></SvgLine>
        <div className='xsm:mb-0 xsm:max-w-[18.06rem] flex max-w-[20.1rem] overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-[0.25rem] mb-[1rem]'>
          <Tag
            className='shrink-0 mr-[0.38rem] last:mr-0'
            icon='https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/wifi-icon.svg'
          >
            Free Wi-Fi
          </Tag>
          <Tag
            className='shrink-0 mr-[0.38rem] last:mr-0'
            icon='https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/Amenity-icon.svg'
          >
            Great breakfast
          </Tag>
          <Tag className='shrink-0 mr-[0.38rem] last:mr-0 border-[0.0625rem] bg-white !text-[#27AAE1] border-[#27AAE1]'>
            Xem 12 tiện ích khác
          </Tag>
        </div>
        <SvgLine
          width={321}
          className='my-[0.875rem] xsm:block hidden'
        ></SvgLine>
        <div className='xsm:w-[18.06rem] flex justify-between items-center p-[0.625rem] rounded-[0.75rem] w-[20.0625rem] h-fit bg-[#F8F8F8] overflow-hidden mb-[0.75rem]'>
          <span className='xsm:mb-14-r pc-16-16-r text-[#10475F] text-fit'>Số lượng phòng</span>
          <div className='flex h-[1.875rem] items-center'>
            <button className='flex items-center justify-start gap-[0.42614rem] p-[0.42614rem] rounded-[5.85938rem] w-fit h-fit bg-[#10475F]/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
              >
                <path
                  d='M12.2723 8.69363H4.09047C3.81092 8.69363 3.5791 8.46181 3.5791 8.18226C3.5791 7.90272 3.81092 7.6709 4.09047 7.6709H12.2723C12.5518 7.6709 12.7836 7.90272 12.7836 8.18226C12.7836 8.46181 12.5518 8.69363 12.2723 8.69363Z'
                  fill='#10475F'
                />
              </svg>
            </button>
            <span className='xsm:text-fit xsm:leading-[1.3] pc-16-16-r font-medium mx-[0.875rem]'>
              3
            </span>
            <button className='flex cursor-pointer items-center active:bg-[#10475F]/40 justify-start gap-[0.42614rem] p-[0.42614rem] rounded-[5.85938rem] w-fit h-fit bg-[#10475F]/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
              >
                <path
                  d='M12.2723 8.69363H4.09047C3.81092 8.69363 3.5791 8.46181 3.5791 8.18226C3.5791 7.90272 3.81092 7.6709 4.09047 7.6709H12.2723C12.5518 7.6709 12.7836 7.90272 12.7836 8.18226C12.7836 8.46181 12.5518 8.69363 12.2723 8.69363Z'
                  fill='#10475F'
                />
                <path
                  d='M8.18226 12.7836C7.90272 12.7836 7.6709 12.5518 7.6709 12.2723V4.09047C7.6709 3.81092 7.90272 3.5791 8.18226 3.5791C8.46181 3.5791 8.69363 3.81092 8.69363 4.09047V12.2723C8.69363 12.5518 8.46181 12.7836 8.18226 12.7836Z'
                  fill='#10475F'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex justify-between items-end'>
          <div className='xsm:flex items-center'>
            <div className='xsm:mr-[0.375rem] xsm:mb-12-r pc-14-14-r text-[#10475F]/80'>
              Giá dự kiến
            </div>
            <div className='xsm:mb-16-m pc-2x-20-m text-[#10475F]'>850.000đ/ đêm</div>
          </div>
          <div className='xsm:hidden'>
            <Button variant={'primary'}>
              <svg
                className='!ml-0 mr-[0.5rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
              >
                <path
                  d='M2.1875 7H11.8125'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M7 2.1875V11.8125'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Chọn phòng
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tag = ({
  className,
  children,
  icon,
}: {
  className?: string
  children: ReactNode
  icon?: string
}) => {
  return (
    <div
      className={cn(
        'flex items-center text-[#10475F] py-[0.3125rem] px-[0.44rem] rounded-[6.25rem] w-fit h-fit bg-[#F8F8F8] overflow-hidden',
        className,
      )}
    >
      <span
        className={`xsm:mb-12-r text-[0.75rem] font-normal leading-[1.3]  ${icon && 'mr-[0.375rem]'}`}
      >
        {children}
      </span>
      {icon && (
        <Image
          className='size-[0.75rem]'
          width={14}
          height={14}
          alt='icon'
          src={icon}
        ></Image>
      )}
    </div>
  )
}

type SvgLineProps = React.SVGAttributes<SVGSVGElement> & {
  width?: number
}
const SvgLine = ({ width = 350, ...props }: SvgLineProps) => {
  return (
    <svg
      width={width}
      height='1'
      viewBox={`0 0 ${width} 1`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line
        x1={width}
        y1='0.5'
        y2='0.5'
        stroke='#10475F'
        strokeOpacity='0.12'
        strokeDasharray='4 4'
      />
    </svg>
  )
}

export default ListRoomDetailCombo
