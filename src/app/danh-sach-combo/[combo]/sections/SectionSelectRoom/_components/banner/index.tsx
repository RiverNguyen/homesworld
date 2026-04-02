import Image from 'next/image'

import ICExpand from '@/components/icons/ICExpand'
import ICLocation from '@/components/icons/ICLocation'

const BannerDetailCombo = () => {
  return (
    <>
      <h2 className='pc-2x-28-m mb-[0.88rem]'>Khách sạn: Nature Hotel - Le Hong Phong</h2>
      <div className='flex items-center mb-[1.25rem]'>
        <ICLocation className='text-[#27AAE1] mr-[0.5rem]'></ICLocation>
        <p className='pc-16-16-r font-medium text-[#10475F]/80'>
          1b9 Đầm Trấu, Bạch Đằng, Hai Bà Trưng, Hà Nội
        </p>
      </div>
      {/* Navigation Buttons */}
      <div className='sticky top-[0] bg-[#F1EFED] z-10 flex mb-[1.25rem] '>
        <button className='pc-16-16-r font-medium text-[#10475F] py-[0.75rem] w-fit px-[1rem] border-[#27AAE1] border-b-[0.25rem] cursor-pointer'>
          Tổng quan khách sạn
        </button>
        <button className='pc-16-16-r font-medium text-[#10475F] py-[0.75rem] w-fit px-[1rem] border-[#27AAE1] cursor-pointer'>
          Tiện ích
        </button>
        <button className='pc-16-16-r font-medium text-[#10475F] py-[0.75rem] w-fit px-[1rem] border-[#27AAE1] cursor-pointer'>
          Các hạng phòng
        </button>
        <button className='pc-16-16-r font-medium text-[#10475F] py-[0.75rem] w-fit px-[1rem] border-[#27AAE1] cursor-pointer'>
          Quy định chính sách
        </button>
        <button className='pc-16-16-r font-medium text-[#10475F] py-[0.75rem] w-fit px-[1rem] border-[#27AAE1] cursor-pointer'>
          Vị trí
        </button>
      </div>
      {/* Gallery PC 331 193*/}
      <div className='grid grid-cols-[46.1875rem_24.8125rem] gap-[0.75rem] grid-rows-2 mb-[2rem]'>
        <div className='relative row-span-2 w-[46.1875rem] h-[24.8125rem] rounded-[0.75rem] overflow-hidden'>
          <div className='size-full absolute left-0 top-0 bg-[#060606] opacity-40'></div>
          <Image
            width={739}
            height={397}
            alt=''
            src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/main_image.webp'}
          ></Image>
          <button className='flex absolute items-center right-0 bottom-0 p-[0.75rem] cursor-pointer'>
            <span className='pc-14-14-r text-[#fff] mr-[0.5rem]'>20+ ảnh khác</span>
            <ICExpand className='size-[0.875rem]'></ICExpand>
          </button>
        </div>
        <Image
          className='w-[20.6875rem] h-[12.0625rem] rounded-[0.75rem]'
          width={331}
          height={193}
          alt=''
          src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/image.webp'}
        ></Image>
        <Image
          className='w-[20.6875rem] h-[12.0625rem] rounded-[0.75rem]'
          width={331}
          height={193}
          alt=''
          src={'https://homesworld.okhub-tech.com/wp-content/uploads/2026/04/image.webp'}
        ></Image>
      </div>
      <p className='pc-16-16-r text-[#10475F]/80 text-fit mb-[2rem]'>
        Nature Hotel - Le Hong Phong là một khách sạn nằm trong khu vực an ninh, toạ lạc tại Phường
        4. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng
        hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn
        sàng hỗ trợ quý khách. Sóng WiFi phủ khắp các khu vực chung của khách sạn cho phép quý khách
        luôn kết nối với gia đình và bè bạn.
      </p>
    </>
  )
}

export default BannerDetailCombo
