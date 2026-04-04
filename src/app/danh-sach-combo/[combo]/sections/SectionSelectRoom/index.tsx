import BannerDetailCombo from '@/app/danh-sach-combo/[combo]/sections/SectionSelectRoom/_components/banner'
import ListRoomDetailCombo from '@/app/danh-sach-combo/[combo]/sections/SectionSelectRoom/_components/list-room'
import UtilDetailCombo from '@/app/danh-sach-combo/[combo]/sections/SectionSelectRoom/_components/util'

const SectionSelectRoom = () => {
  return (
    <section className='w-full bg-[#F1EFED]'>
      <div className='xsm:flex-col flex w-[90rem] pt-[2rem] justify-between mx-auto'>
        {/* Left */}
        <div className='w-[67.625rem]'>
          <BannerDetailCombo></BannerDetailCombo>
          {/* Tiện ích */}
          <UtilDetailCombo></UtilDetailCombo>
          <ListRoomDetailCombo></ListRoomDetailCombo>
        </div>
        {/* Right */}
        <div className='relative w-[20.375rem] h-full'>
          <div className='sticky top-[11.69rem] rounded-[1.125rem] shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'>
            <div className='py-[1.125rem] px-[1rem] bg-[#8CC63F]'>
              <h3 className='pc-18-18-m text-white text-fit'>Xác nhận thông tin</h3>
            </div>
            <div className='pt-[0.75rem] pb-[1.125rem] px-[0.75rem] bg-white'>
              <div className='py-[1rem] px-[0.88rem] rounded-[0.5rem] w-full h-fit bg-[#F8F8F8] overflow-hidden'>
                <h4 className='pc-16-16-r font-medium'>Nature Hotel - Le Hong Phong</h4>
                <div className='pc-14-14-r text-[#10475FCC]/80'>3 room single, 3 Room double</div>
                <svg
                  className='my-[0.75rem]'
                  width='274'
                  height='1'
                  viewBox='0 0 274 1'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    y1='0.5'
                    x2='274'
                    y2='0.5'
                    stroke='#10475F'
                    strokeOpacity='0.12'
                    strokeDasharray='4 4'
                  />
                </svg>
                {/* Content */}
                <div>
                  <div className='flex justify-between mb-[1rem] last:mb-0'>
                    <div className='pc-14-14-r text-[#10475F]/80'>Phòng Đôi Superior</div>
                    <div className='pc-14-14-r font-medium text-[#10475F]'>03 phòng</div>
                  </div>
                  <div className='flex justify-between mb-[1rem] last:mb-0'>
                    <div className='pc-14-14-r text-[#10475F]/80'>Phòng Đôi Superior</div>
                    <div className='pc-14-14-r font-medium text-[#10475F]'>03 phòng</div>
                  </div>
                </div>
                <svg
                  className='my-[0.75rem]'
                  width='274'
                  height='1'
                  viewBox='0 0 274 1'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    y1='0.5'
                    x2='274'
                    y2='0.5'
                    stroke='#10475F'
                    strokeOpacity='0.12'
                    strokeDasharray='4 4'
                  />
                </svg>
                <div className='flex justify-between'>
                  <div>
                    <div className='pc-16-16-r font-medium text-[#10475F] mb-[-0.125rem]'>
                      Giá dự kiến
                    </div>
                    <div className='text-[#10475F] text-[0.75rem] font-normal leading-[1.3] text-left'>
                      (Combo tàu + phòng + xe)
                    </div>
                  </div>
                  <div className='pc-16-16-r font-medium text-[#42A3CC]'>3.030.000đ/người</div>
                </div>
              </div>
              {/* Footer */}
              <div className='w-[18.75rem] my-[0.75rem] text-[0.875rem] italic font- font-light leading-[1.5] [font-feature-settings:"liga"_off,"clig"_off]'>
                <span className='text-[#EF2020]'>*</span>Lưu ý: Giá combo thay đổi theo số lượng
                người thực tế / số lượng người tiêu chuẩn
              </div>
              <div className='flex items-center text-[#42A3CC]'>
                <svg
                  className='mr-[0.38rem] size-[1.125rem]'
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M8.06265 1.83773C8.58765 1.39523 9.43515 1.39523 9.94515 1.83773L11.1301 2.85023C11.3551 3.03773 11.7826 3.19523 12.0826 3.19523H13.3576C14.1526 3.19523 14.8051 3.84773 14.8051 4.64273V5.91773C14.8051 6.21773 14.9626 6.63773 15.1501 6.86273L16.1626 8.04773C16.6051 8.57273 16.6051 9.42023 16.1626 9.93023L15.1501 11.1152C14.9626 11.3402 14.8051 11.7602 14.8051 12.0602V13.3352C14.8051 14.1302 14.1526 14.7827 13.3576 14.7827H12.0826C11.7826 14.7827 11.3626 14.9402 11.1376 15.1277L9.95265 16.1402C9.42765 16.5827 8.58015 16.5827 8.07015 16.1402L6.88515 15.1277C6.66015 14.9402 6.23265 14.7827 5.94015 14.7827H4.62765C3.83265 14.7827 3.18015 14.1302 3.18015 13.3352V12.0527C3.18015 11.7602 3.03015 11.3327 2.84266 11.1152L1.83016 9.92273C1.39516 9.40523 1.39516 8.56523 1.83016 8.04773L2.84266 6.85523C3.03015 6.63023 3.18015 6.21023 3.18015 5.91773V4.65023C3.18015 3.85523 3.83265 3.20273 4.62765 3.20273H5.92515C6.22515 3.20273 6.64515 3.04523 6.87015 2.85773L8.06265 1.83773Z'
                    stroke='#42A3CC'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 6.09766V9.72015'
                    stroke='#42A3CC'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.99609 12H9.00283'
                    stroke='#42A3CC'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='text-fit'>Chính sách hoàn tiền</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSelectRoom
