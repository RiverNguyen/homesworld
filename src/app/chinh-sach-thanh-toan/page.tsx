import TocBot from '@/components/shared/TocBot'
import './style.css'
import ENDPOINTS from '@/configs/endpoints'
import { addIdToHeadings } from '@/helper/add-id-to-headings'
import { IPaymentPolicyContent } from '@/interface/payment-policy'
import paymentPolicyService from '@/services/payment-policy'

const PaymentPolicy = async () => {
  const [{ content }]: [IPaymentPolicyContent] = await Promise.all([
    paymentPolicyService.getContent(ENDPOINTS.paymentPolicyPageId),
  ])
  return (
    <section className='xsm:pt-[2rem] xsm:pb-[2.25rem] pb-[5.75rem] xsm:my-0 xsm:px-[0.75rem] bg-[#FEFBF9] pt-[3.5rem]'>
      <div className='max-w-[70rem] mx-auto'>
        <h2 className='xsm:p-0 xsm:mb-25-s-mons pc-h2-46-s-mons text-[#10475F]'>
          Chính sách thanh toán
        </h2>
        <TocBot contentRef='#blog_content' />
        <article
          id='blog_content'
          // ref={contentRef}
          dangerouslySetInnerHTML={{ __html: addIdToHeadings(content.rendered) }}
        />
      </div>
    </section>
  )
}

export default PaymentPolicy
