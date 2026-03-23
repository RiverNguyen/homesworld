import ICLocation from '@/components/ui/icons/ICLocation'
import ICCall from '@/components/ui/icons/ICCall'

export default function Contact() {
  return (
    <div className='contact bg-[#FEFBF9]'>
      <div className='contact__container max-w-[87.5rem] mx-auto pt-[3.5rem]  grid grid-cols-2 gap-10 tablet:gap-8 xlg:grid-cols-1 xsm:grid-cols-1'>
        {/* LEFT */}
        <div className='contact__left flex flex-col gap-6'>
          <h1 className='contact__title text-3xl font-bold text-gray-800'>Liên hệ với chúng tôi</h1>

          <div className='contact__info flex flex-col gap-2 text-gray-600'>
            <div className='contact__item flex items-center gap-2 text-sm'>
              <ICCall />
              31 Trần Kim Xuyến, Yên Hòa, Cầu Giấy, Hà Nội
            </div>

            <div className='contact__item flex items-center gap-2 text-sm'>
              <ICLocation />
              31 Trần Kim Xuyến, Yên Hòa, Cầu Giấy, Hà Nội
            </div>
          </div>

          <div className='flex flex-col  '>
            <h3 className='xsm:self-stretch xsm:w-full xsm:text-[#10475F] xsm:text-[1.25rem] xsm:font-medium xsm:font-halyard-display xsm:leading-[1.3] xsm:text-left'>
              Theo dõi chúng tôi
            </h3>
            <div className='flex'>
              <div className='contact__social-item w-24 h-24 rounded-xl bg-gray-300'></div>
              <div className='contact__social-item w-24 h-24 rounded-xl bg-gray-300'></div>
              <div className='contact__social-item w-24 h-24 rounded-xl bg-gray-300'></div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='contact__right bg-white p-6 rounded-2xl shadow'>
          <form className='contact__form flex flex-col gap-4'>
            <div className='contact__row grid grid-cols-2 gap-4 xlg:grid-cols-1 xsm:grid-cols-1'>
              <input
                className='contact__input w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500'
                placeholder='Tên của bạn'
              />
              <input
                className='contact__input w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500'
                placeholder='Số điện thoại'
              />
            </div>

            <select className='contact__input w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500'>
              <option>Nhu cầu của bạn</option>
            </select>

            <textarea
              className='contact__textarea w-full border border-gray-300 rounded-lg px-4 py-2 text-sm h-28 outline-none focus:border-blue-500'
              placeholder='Ghi chú'
            />

            <button className='contact__button w-fit bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600'>
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
